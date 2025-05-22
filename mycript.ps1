function Process-Directory {
    param (
        [string]$Path
    )

    # List directory contents (like 'ls')
    Write-Host "`n=== DIRECTORY: $Path ===" -ForegroundColor Green
    Get-ChildItem -Path $Path | Format-Table Name,Mode -AutoSize

    # Process files in current directory first
    $files = Get-ChildItem -Path $Path -File
    if ($files) {
        Write-Host "`n[FILE CONTENTS]" -ForegroundColor Yellow
        foreach ($file in $files) {
            Write-Host "`n---- $($file.Name) ----" -ForegroundColor Cyan
            Get-Content $file.FullName
        }
    }

    # Process subdirectories after files
    $subDirs = Get-ChildItem -Path $Path -Directory
    foreach ($dir in $subDirs) {
        Process-Directory -Path $dir.FullName
    }
}

# Start processing from the root directory
$rootPath = "PS C:\Users\user\Desktop\projects\print\apexfit>"

# Process directory structure
Process-Directory -Path $rootPath

# Process root files after all subdirectories
Write-Host "`n=== ROOT FILES ===" -ForegroundColor Green
$rootFiles = Get-ChildItem -Path $rootPath -File
if ($rootFiles) {
    foreach ($file in $rootFiles) {
        Write-Host "`n---- $($file.Name) ----" -ForegroundColor Cyan
        Get-Content $file.FullName
    }
}