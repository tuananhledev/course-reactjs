import { Link } from 'react-router-dom';

export const linkItems = [
   {
      title: <Link to="/Home">Trang chủ</Link>,
      className: 'link-item',
   },
   {
      title: <Link to="/course">Khoá học</Link>,
      className: 'link-item',
   },
];

export const filterItemsCourseSelection = [
   {
      value: 'name',
      label: 'Theo tên',
   },
   {
      value: 'price',
      label: 'Theo giá',
   },
   {
      value: 'member',
      label: 'Theo số lượng học viên',
   },
];
