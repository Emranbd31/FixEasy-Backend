# PowerShell script to safely back up the FixEasy project before deployment


$timestamp = Get-Date -Format "yyyy-MM-dd-HHmm"
$backupFolder = "backup_$timestamp"
$backupPath = Join-Path $PSScriptRoot $backupFolder
$zipPath = "$backupPath.zip"

# Create the backup folder
New-Item -ItemType Directory -Path $backupPath -Force | Out-Null

# Use robocopy to copy files, excluding .git, node_modules, and previous backup_* folders
$excludeDirs = @(".git", "node_modules")
$excludeBackups = Get-ChildItem -Path $PSScriptRoot -Directory -Filter "backup_*" | ForEach-Object { $_.Name }
$excludeAll = $excludeDirs + $excludeBackups

$excludeArgs = $excludeAll | ForEach-Object { "/XD", (Join-Path $PSScriptRoot $_) }

# robocopy source destination /E (copy subdirs) /XD (exclude dirs)
robocopy $PSScriptRoot $backupPath /E @excludeArgs | Out-Null
$code = $LASTEXITCODE
if ($code -ge 8) {
	Write-Host "❌ Backup failed with robocopy exit code $code. Deployment aborted."
	exit $code
} else {
	Compress-Archive -Path $backupPath\* -DestinationPath $zipPath -Force
	Write-Host "✅ FixEasy backup completed successfully at $timestamp."
}
