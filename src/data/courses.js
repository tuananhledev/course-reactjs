const dataCourses = [
   {
      name: '.NET Core Api',
      mentor: 'Trần Hoà Hiệp',
      mentorAvatar: 'images/avatar-mentor-1.jpg',
      banner: 'images/net-api-course.jpg',
      students: 104,
      level: 'easy',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 5,
      price: 1000000,
      lessons: 15,
      type: 'offline',
      area: ['frontend', 'backend'],
   },
   {
      name: 'Nhập môn kiểm thử phần mềm',
      mentor: 'Tô Lý Hữu Nhân',
      mentorAvatar: 'images/avatar-mentor-2.jpg',
      banner: 'images/front-end-course.png',
      students: 22,
      level: 'medium',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 4.5,
      price: 1400000,
      lessons: 12,
      type: 'online',
      area: ['frontend', 'backend'],
   },
   {
      name: 'Windows Form',
      mentor: 'Phạm Nhật Tân',
      mentorAvatar: 'images/avatar-mentor-3.jpg',
      banner: 'images/devops-course-banner.png',
      students: 0,
      level: 'hard',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 0,
      price: 3000000,
      lessons: 15,
      type: 'online',
      area: ['frontend', 'backend'],
   },
   {
      name: 'C Basic',
      mentor: 'Nguyễn Viết Châu',
      mentorAvatar: 'images/avatar-mentor-2.jpg',
      banner: 'images/net-mvc-course.png',
      students: 30,
      level: 'expert',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 5,
      price: 3600000,
      lessons: 18,
      type: 'online',
      area: ['frontend', 'backend'],
   },
   {
      name: 'HTML & CSS_Basic',
      mentor: 'Đoàn Ngọc Trân Châu',
      mentorAvatar: 'images/avatar-mentor-3.jpg',
      banner: 'images/php-basic.png',
      students: 12,
      level: 'easy',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 5,
      price: 3600000,
      lessons: 18,
      type: 'online',
      area: ['frontend', 'backend'],
   },
   {
      name: 'Java Basic',
      mentor: 'Phạm Nhật Tân',
      mentorAvatar: 'images/avatar-mentor-1.jpg',
      banner: 'images/reactjs-expert.jpg',
      students: 26,
      level: 'medium',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 5,
      price: 2500000,
      lessons: 15,
      type: 'online',
      area: ['frontend', 'backend'],
   },
   // 
   {
      name: 'C Basic',
      mentor: 'Nguyễn Viết Châu',
      mentorAvatar: 'images/avatar-mentor-2.jpg',
      banner: 'images/net-mvc-course.png',
      students: 21,
      level: 'expert',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 5,
      price: 2600000,
      lessons: 45,
      type: 'online',
      area: ['frontend', 'backend'],
   },

   {
      name: 'Java Basic',
      mentor: 'Phạm Nhật Tân',
      mentorAvatar: 'images/avatar-mentor-1.jpg',
      banner: 'images/reactjs-expert.jpg',
      students: 45,
      level: 'medium',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 5,
      price: 1500000,
      lessons: 15,
      type: 'online',
      area: ['frontend', 'backend'],
   },
   {
      name: 'Nhập môn kiểm thử phần mềm',
      mentor: 'Tô Lý Hữu Nhân',
      mentorAvatar: 'images/avatar-mentor-2.jpg',
      banner: 'images/front-end-course.png',
      students: 12,
      level: 'medium',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 4.5,
      price: 2400000,
      lessons: 36,
      type: 'online',
      area: ['frontend', 'backend'],
   },
   {
      name: 'Windows Form',
      mentor: 'Phạm Nhật Tân',
      mentorAvatar: 'images/avatar-mentor-3.jpg',
      banner: 'images/devops-course-banner.png',
      students: 7,
      level: 'hard',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 1,
      price: 4000000,
      lessons: 25,
      type: 'online',
      area: ['frontend', 'backend'],
   },
   {
      name: 'HTML & CSS_Basic',
      mentor: 'Đoàn Ngọc Trân Châu',
      mentorAvatar: 'images/avatar-mentor-3.jpg',
      banner: 'images/php-basic.png',
      students: 28,
      level: 'easy',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 5,
      price: 2300000,
      lessons: 22,
      type: 'online',
      area: ['frontend', 'backend'],
   },
   {
      name: '.NET Core Api',
      mentor: 'Trần Hoà Hiệp',
      mentorAvatar: 'images/avatar-mentor-1.jpg',
      banner: 'images/net-api-course.jpg',
      students: 104,
      level: 'easy',
      description:
         '. NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .',
      star: 4,
      price: 3000000,
      lessons: 25,
      type: 'offline',
      area: ['frontend', 'backend'],
   },
   //

];

export default dataCourses;
