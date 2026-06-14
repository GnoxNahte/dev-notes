---
publish: true
created: 2026-01-04T15:30:57.794+08:00
modified: 2026-03-30T21:27:48.697+08:00
published: 2026-03-30T21:27:48.697+08:00
links: https://www.digitalocean.com/community/tutorials/linux-commands
related-notes:
  - "[[Windows Commands]]"
  - "[[gcc]]"
---

## File and Directory Commands

| Command    | Description                                | Example                                    |
| ---------- | ------------------------------------------ | ------------------------------------------ |
| ls         | List directory contents.                   | `ls`                                       |
| cd         | Change directory.                          | `cd /path/to/directory`                    |
| pwd        | Show current directory.                    | `pwd`                                      |
| mkdir      | Create a new directory.                    | `mkdir new_directory`                      |
| rmdir      | Remove an empty directory.                 | `rmdir empty_directory`                    |
| rm         | Delete files or directories.               | `rm file.txt`                              |
| touch      | Create an empty file.                      | `touch new_file.txt`                       |
| cp         | Copy files or directories.                 | `cp file.txt /path/to/destination`         |
| mv         | Move or rename files.                      | `mv file.txt /path/to/new_location`        |
| cat        | Display file contents.                     | `cat file.txt`                             |
| nano / vim | Edit files in terminal.                    | `nano file.txt`                            |
| find       | Search for files in a directory hierarchy. | `find . -name "file.txt"`                  |
| grep       | Search text using patterns.                | `grep "pattern" file.txt`                  |
| tar        | Archive and compress files.                | `tar -cvf archive.tar file1.txt file2.txt` |
| df         | Show disk usage of file systems.           | `df`                                       |
| du         | Show directory/file size.                  | `du -sh /path/to/directory`                |
| chmod      | Change file permissions.                   | `chmod 755 file.txt`                       |
| chown      | Change file owner.                         | `chown user:group file.txt`                |
| mount      | Mount a filesystem.                        | `mount /dev/sdb1 /mnt`                     |
| umount     | Unmount a filesystem.                      | `umount /mnt`                              |
