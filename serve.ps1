param([string]$Root = $PSScriptRoot, [int]$Port = $(if ($env:PORT) { [int]$env:PORT } else { 5173 }))
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Output "Serving $Root on http://localhost:$Port/"
$types = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="text/javascript; charset=utf-8"; ".svg"="image/svg+xml"; ".json"="application/json"; ".md"="text/plain; charset=utf-8"; ".png"="image/png" }
$rootFull = [System.IO.Path]::GetFullPath($Root)
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
    if ($path -eq '') { $path = 'index.html' }
    $file = [System.IO.Path]::GetFullPath((Join-Path $rootFull $path))
    if ($file.StartsWith($rootFull) -and (Test-Path $file -PathType Leaf)) {
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $ext = [System.IO.Path]::GetExtension($file).ToLower()
      $ctx.Response.ContentType = $(if ($types.ContainsKey($ext)) { $types[$ext] } else { "application/octet-stream" })
      $ctx.Response.Headers.Add("Cache-Control", "no-store")
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Output "200 /$path"
    } else {
      $ctx.Response.StatusCode = 404
      Write-Output "404 /$path"
    }
  } catch { Write-Output "ERR $_" }
  finally { $ctx.Response.Close() }
}
