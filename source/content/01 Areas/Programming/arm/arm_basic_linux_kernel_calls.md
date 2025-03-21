---
tags:
  - Programming
date: 2025-01-14
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Basic linux kernel calls (ARM)

- `read` - Reads data from a file descriptor.
- `write` - Writes data to a file descriptor.
- `open` - Opens a file and returns a file descriptor.
- `close` - Closes a file descriptor.
- `stat` - Retrieves file status.
- `fstat` - Retrieves file status given a file descriptor.
- `lstat` - Retrieves file status, but does not follow symbolic links.
- `poll` - Waits for some event on a file descriptor.
- `lseek` - Repositions the file offset of an open file.
- `mmap` - Maps files or devices into memory.
- `mprotect` - Sets protection on a region of memory.
- `munmap` - Unmaps a region of memory.
- `brk` - Changes the location of the program break, which defines the end of the process's data segment.
- `rt_sigaction` - Examines and changes a signal action.
- `rt_sigprocmask` - Examines and changes blocked signals.
- `ioctl` - Manipulates the underlying device parameters of special files.
- `pread64` - Reads data from a file descriptor at a given offset.
- `pwrite64` - Writes data to a file descriptor at a given offset.
- `readv` - Reads data from multiple buffers.
- `writev` - Writes data to multiple buffers.


## First 100 System calls

| NR  | SYSCALL NAME      | x8  | ARG0 (x0)                     | ARG1 (x1)                           | ARG2 (x2)                              | ARG3 (x3)                        | ARG4 (x4)                         | ARG5 (x5)          |
| --- | ----------------- | --- | ----------------------------- | ----------------------------------- | -------------------------------------- | -------------------------------- | --------------------------------- | ------------------ |
| 0   | io_setup          | 0   | unsigned nr_reqs              | aio_context_t *ctx                  | -                                      | -                                | -                                 | -                  |
| 1   | io_destroy        | 1   | aio_context_t ctx             | -                                   | -                                      | -                                | -                                 | -                  |
| 2   | io_submit         | 2   | aio_context_t                 | long                                | struct iocb * *                        | -                                | -                                 | -                  |
| 3   | io_cancel         | 3   | aio_context_t ctx_id          | struct iocb *iocb                   | struct io_event *result                | -                                | -                                 | -                  |
| 4   | io_getevents      | 4   | aio_context_t ctx_id          | long min_nr                         | long nr                                | struct io_event *events          | struct __kernel_timespec *timeout | -                  |
| 5   | setxattr          | 5   | const char *path              | const char *name                    | const void *value                      | size_t size                      | int flags                         | -                  |
| 6   | lsetxattr         | 6   | const char *path              | const char *name                    | const void *value                      | size_t size                      | int flags                         | -                  |
| 7   | fsetxattr         | 7   | int fd                        | const char *name                    | const void *value                      | size_t size                      | int flags                         | -                  |
| 8   | getxattr          | 8   | const char *path              | const char *name                    | void *value                            | size_t size                      | -                                 | -                  |
| 9   | lgetxattr         | 9   | const char *path              | const char *name                    | void *value                            | size_t size                      | -                                 | -                  |
| 10  | fgetxattr         | A   | int fd                        | const char *name                    | void *value                            | size_t size                      | -                                 | -                  |
| 11  | listxattr         | B   | const char *path              | char *list                          | size_t size                            | -                                | -                                 | -                  |
| 12  | llistxattr        | C   | const char *path              | char *list                          | size_t size                            | -                                | -                                 | -                  |
| 13  | flistxattr        | D   | int fd                        | char *list                          | size_t size                            | -                                | -                                 | -                  |
| 14  | removexattr       | E   | const char *path              | const char *name                    | -                                      | -                                | -                                 | -                  |
| 15  | lremovexattr      | F   | const char *path              | const char *name                    | -                                      | -                                | -                                 | -                  |
| 16  | fremovexattr      | 10  | int fd                        | const char *name                    | -                                      | -                                | -                                 | -                  |
| 17  | getcwd            | 11  | char *buf                     | unsigned long size                  | -                                      | -                                | -                                 | -                  |
| 18  | lookup_dcookie    | 12  | u64 cookie64                  | char *buf                           | size_t len                             | -                                | -                                 | -                  |
| 19  | eventfd2          | 13  | unsigned int count            | int flags                           | -                                      | -                                | -                                 | -                  |
| 20  | epoll_create1     | 14  | int flags                     | -                                   | -                                      | -                                | -                                 | -                  |
| 21  | epoll_ctl         | 15  | int epfd                      | int op                              | int fd                                 | struct epoll_event *event        | -                                 | -                  |
| 22  | epoll_pwait       | 16  | int epfd                      | struct epoll_event *events          | int maxevents                          | int timeout                      | const sigset_t *sigmask           | size_t sigsetsize  |
| 23  | dup               | 17  | unsigned int fildes           | -                                   | -                                      | -                                | -                                 | -                  |
| 24  | dup3              | 18  | unsigned int oldfd            | unsigned int newfd                  | int flags                              | -                                | -                                 | -                  |
| 25  | fcntl             | 19  | unsigned int fd               | unsigned int cmd                    | unsigned long arg                      | -                                | -                                 | -                  |
| 26  | inotify_init1     | 1A  | int flags                     | -                                   | -                                      | -                                | -                                 | -                  |
| 27  | inotify_add_watch | 1B  | int fd                        | const char *path                    | u32 mask                               | -                                | -                                 | -                  |
| 28  | inotify_rm_watch  | 1C  | int fd                        | __s32 wd                            | -                                      | -                                | -                                 | -                  |
| 29  | ioctl             | 1D  | unsigned int fd               | unsigned int cmd                    | unsigned long arg                      | -                                | -                                 | -                  |
| 30  | ioprio_set        | 1E  | int which                     | int who                             | int ioprio                             | -                                | -                                 | -                  |
| 31  | ioprio_get        | 1F  | int which                     | int who                             | -                                      | -                                | -                                 | -                  |
| 32  | flock             | 20  | unsigned int fd               | unsigned int cmd                    | -                                      | -                                | -                                 | -                  |
| 33  | mknodat           | 21  | int dfd                       | const char * filename               | umode_t mode                           | unsigned dev                     | -                                 | -                  |
| 34  | mkdirat           | 22  | int dfd                       | const char * pathname               | umode_t mode                           | -                                | -                                 | -                  |
| 35  | unlinkat          | 23  | int dfd                       | const char * pathname               | int flag                               | -                                | -                                 | -                  |
| 36  | symlinkat         | 24  | const char * oldname          | int newdfd                          | const char * newname                   | -                                | -                                 | -                  |
| 37  | linkat            | 25  | int olddfd                    | const char *oldname                 | int newdfd                             | const char *newname              | int flags                         | -                  |
| 38  | renameat          | 26  | int olddfd                    | const char * oldname                | int newdfd                             | const char * newname             | -                                 | -                  |
| 39  | umount2           | 27  | ?                             | ?                                   | ?                                      | ?                                | ?                                 | ?                  |
| 40  | mount             | 28  | char *dev_name                | char *dir_name                      | char *type                             | unsigned long flags              | void *data                        | -                  |
| 41  | pivot_root        | 29  | const char *new_root          | const char *put_old                 | -                                      | -                                | -                                 | -                  |
| 42  | nfsservctl        | 2A  | ?                             | ?                                   | ?                                      | ?                                | ?                                 | ?                  |
| 43  | statfs            | 2B  | const char * path             | struct statfs *buf                  | -                                      | -                                | -                                 | -                  |
| 44  | fstatfs           | 2C  | unsigned int fd               | struct statfs *buf                  | -                                      | -                                | -                                 | -                  |
| 45  | truncate          | 2D  | const char *path              | long length                         | -                                      | -                                | -                                 | -                  |
| 46  | ftruncate         | 2E  | unsigned int fd               | unsigned long length                | -                                      | -                                | -                                 | -                  |
| 47  | fallocate         | 2F  | int fd                        | int mode                            | loff_t offset                          | loff_t len                       | -                                 | -                  |
| 48  | faccessat         | 30  | int dfd                       | const char *filename                | int mode                               | -                                | -                                 | -                  |
| 49  | chdir             | 31  | const char *filename          | -                                   | -                                      | -                                | -                                 | -                  |
| 50  | fchdir            | 32  | unsigned int fd               | -                                   | -                                      | -                                | -                                 | -                  |
| 51  | chroot            | 33  | const char *filename          | -                                   | -                                      | -                                | -                                 | -                  |
| 52  | fchmod            | 34  | unsigned int fd               | umode_t mode                        | -                                      | -                                | -                                 | -                  |
| 53  | fchmodat          | 35  | int dfd                       | const char * filename               | umode_t mode                           | -                                | -                                 | -                  |
| 54  | fchownat          | 36  | int dfd                       | const char *filename                | uid_t user                             | gid_t group                      | int flag                          | -                  |
| 55  | fchown            | 37  | unsigned int fd               | uid_t user                          | gid_t group                            | -                                | -                                 | -                  |
| 56  | openat            | 38  | int dfd                       | const char *filename                | int flags                              | umode_t mode                     | -                                 | -                  |
| 57  | close             | 39  | unsigned int fd               | -                                   | -                                      | -                                | -                                 | -                  |
| 58  | vhangup           | 3A  | -                             | -                                   | -                                      | -                                | -                                 | -                  |
| 59  | pipe2             | 3B  | int *fildes                   | int flags                           | -                                      | -                                | -                                 | -                  |
| 60  | quotactl          | 3C  | unsigned int cmd              | const char *special                 | qid_t id                               | void *addr                       | -                                 | -                  |
| 61  | getdents64        | 3D  | unsigned int fd               | struct linux_dirent64 *dirent       | unsigned int count                     | -                                | -                                 | -                  |
| 62  | lseek             | 3E  | unsigned int fd               | off_t offset                        | unsigned int whence                    | -                                | -                                 | -                  |
| 63  | read              | 3F  | unsigned int fd               | char *buf                           | size_t count                           | -                                | -                                 | -                  |
| 64  | write             | 40  | unsigned int fd               | const char *buf                     | size_t count                           | -                                | -                                 | -                  |
| 65  | readv             | 41  | unsigned long fd              | const struct iovec *vec             | unsigned long vlen                     | -                                | -                                 | -                  |
| 66  | writev            | 42  | unsigned long fd              | const struct iovec *vec             | unsigned long vlen                     | -                                | -                                 | -                  |
| 67  | pread64           | 43  | unsigned int fd               | char *buf                           | size_t count                           | loff_t pos                       | -                                 | -                  |
| 68  | pwrite64          | 44  | unsigned int fd               | const char *buf                     | size_t count                           | loff_t pos                       | -                                 | -                  |
| 69  | preadv            | 45  | unsigned long fd              | const struct iovec *vec             | unsigned long vlen                     | unsigned long pos_l              | unsigned long pos_h               | -                  |
| 70  | pwritev           | 46  | unsigned long fd              | const struct iovec *vec             | unsigned long vlen                     | unsigned long pos_l              | unsigned long pos_h               | -                  |
| 71  | sendfile          | 47  | int out_fd                    | int in_fd                           | off_t *offset                          | size_t count                     | -                                 | -                  |
| 72  | pselect6          | 48  | int                           | fd_set *                            | fd_set *                               | fd_set *                         | struct __kernel_timespec *        | void *             |
| 73  | ppoll             | 49  | struct pollfd *               | unsigned int                        | struct __kernel_timespec *             | const sigset_t *                 | size_t                            | -                  |
| 74  | signalfd4         | 4A  | int ufd                       | sigset_t *user_mask                 | size_t sizemask                        | int flags                        | -                                 | -                  |
| 75  | vmsplice          | 4B  | int fd                        | const struct iovec *iov             | unsigned long nr_segs                  | unsigned int flags               | -                                 | -                  |
| 76  | splice            | 4C  | int fd_in                     | loff_t *off_in                      | int fd_out                             | loff_t *off_out                  | size_t len                        | unsigned int flags |
| 77  | tee               | 4D  | int fdin                      | int fdout                           | size_t len                             | unsigned int flags               | -                                 | -                  |
| 78  | readlinkat        | 4E  | int dfd                       | const char *path                    | char *buf                              | int bufsiz                       | -                                 | -                  |
| 79  | newfstatat        | 4F  | int dfd                       | const char *filename                | struct stat *statbuf                   | int flag                         | -                                 | -                  |
| 80  | fstat             | 50  | unsigned int fd               | struct __old_kernel_stat *statbuf   | -                                      | -                                | -                                 | -                  |
| 81  | sync              | 51  | -                             | -                                   | -                                      | -                                | -                                 | -                  |
| 82  | fsync             | 52  | unsigned int fd               | -                                   | -                                      | -                                | -                                 | -                  |
| 83  | fdatasync         | 53  | unsigned int fd               | -                                   | -                                      | -                                | -                                 | -                  |
| 84  | sync_file_range   | 54  | int fd                        | loff_t offset                       | loff_t nbytes                          | unsigned int flags               | -                                 | -                  |
| 85  | timerfd_create    | 55  | int clockid                   | int flags                           | -                                      | -                                | -                                 | -                  |
| 86  | timerfd_settime   | 56  | int ufd                       | int flags                           | const struct __kernel_itimerspec *utmr | struct __kernel_itimerspec *otmr | -                                 | -                  |
| 87  | timerfd_gettime   | 57  | int ufd                       | struct __kernel_itimerspec *otmr    | -                                      | -                                | -                                 | -                  |
| 88  | utimensat         | 58  | int dfd                       | const char *filename                | struct __kernel_timespec *utimes       | int flags                        | -                                 | -                  |
| 89  | acct              | 59  | const char *name              | -                                   | -                                      | -                                | -                                 | -                  |
| 90  | capget            | 5A  | cap_user_header_t header      | cap_user_data_t dataptr             | -                                      | -                                | -                                 | -                  |
| 91  | capset            | 5B  | cap_user_header_t header      | const cap_user_data_t data          | -                                      | -                                | -                                 | -                  |
| 92  | personality       | 5C  | unsigned int personality      | -                                   | -                                      | -                                | -                                 | -                  |
| 93  | exit              | 5D  | int error_code                | -                                   | -                                      | -                                | -                                 | -                  |
| 94  | exit_group        | 5E  | int error_code                | -                                   | -                                      | -                                | -                                 | -                  |
| 95  | waitid            | 5F  | int which                     | pid_t pid                           | struct siginfo *infop                  | int options                      | struct rusage *ru                 | -                  |
| 96  | set_tid_address   | 60  | int *tidptr                   | -                                   | -                                      | -                                | -                                 | -                  |
| 97  | unshare           | 61  | unsigned long unshare_flags   | -                                   | -                                      | -                                | -                                 | -                  |
| 98  | futex             | 62  | u32 *uaddr                    | int op                              | u32 val                                | struct __kernel_timespec *utime  | u32 *uaddr2                       | u32 val3           |
| 99  | set_robust_list   | 63  | struct robust_list_head *head | size_t len                          | -                                      | -                                | -                                 | -                  |
| 100 | get_robust_list   | 64  | int pid                       | struct robust_list_head * *head_ptr | size_t *len_ptr                        | -                                | -                                 | -                  |

