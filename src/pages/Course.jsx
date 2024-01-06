import React, { useMemo, useState } from 'react';
import '../Css/course.css'
import CourseCard from '../components/CourseCard';
import FilterBox from '../components/FilterBox';
import FilterCheckbox from '../components/FilterCheckbox';
import FilterCurrency from '../components/FilterCurrency';

import { Breadcrumb, Button, Form, Pagination, Select } from 'antd';
import { dataCourses, linkItems, filterItemsCourseSelection } from '../data';




const Course = () => {
   const [error, setError] = useState(null);
   const [checkBox, setCheckBox] = useState({ type: [], level: [], area: [] });
   const [total, setTotal] = useState(dataCourses.length);
   const [pagination, setPagination] = useState(1);
   const [sortBy, setSortBy] = useState('');


   const [formData, setFormData] = useState({
      fromPrice: NaN,
      toPrice: NaN,
      type: [],
      level: [],
      area: [],
   });

   const [priceValues, setPrivesValues] = useState({
      fromPrice: NaN,
      toPrice: NaN,
   });

   const handlePaginationChange = (page) => {
      setPagination(page);
   };

   const handlePriceChange = (e) => {
      let value = e.target.value.split(' ')[0];
      var number = Number(value.replace(/[^0-9.-]+/g, ''));
      setPrivesValues({ ...priceValues, [e.target.name]: number });
   };

   const isExist = (arr1 = [], arr2 = []) => {
      for (let i = 0; i < arr1.length; i++) {
         for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
               return true;
            }
         }
      }
      return false;
   };

   const letFilter = useMemo(() => {
      let courses = Array.of(...dataCourses);

      if (!Number.isNaN(formData.fromPrice) && !Number.isNaN(formData.toPrice)) {
         courses = courses.filter((item) => item.price >= formData.fromPrice && item.price <= formData.toPrice,);
      }

      if (formData.type.length > 0) {
         courses = courses.filter((item) => item.type === formData.type[0] || item.type === formData.type[1],);
      }

      if (formData.level.length > 0) {
         courses = courses.filter((item) => formData.level.includes(item.level),);
      }

      if (formData.area.length > 0) {
         courses = courses.filter((item) => isExist(formData.area, item.area),);
      }

      if (sortBy !== null) {
         if (sortBy === 'name') {
            courses.sort((a, b) => a.name.localeCompare(b.name));
            console.log('name');
         } else if (sortBy === 'price') {
            courses.sort((a, b) => (a.price - b.price <= 0 ? 1 : -1));
         } else if (sortBy === 'member') {
            courses.sort((a, b) => (a.students - b.students <= 0 ? 1 : -1));
         }
      }
      setTotal(courses.length);
      const filterCourses = courses.slice((pagination - 1) * 6, pagination * 6);
      return filterCourses;
   }, [pagination, sortBy, formData]);

   const handleFocus = (e) => {
      setError('');
   };

   const handleCheckBoxChange = (typeGroup) => {
      return (value) => {
         if (typeGroup === 'type') {
            setCheckBox({ ...checkBox, type: value });
         } else if (typeGroup === 'level') {
            setCheckBox({ ...checkBox, level: value });
         } else if (typeGroup === 'area') {
            setCheckBox({ ...checkBox, area: value });
         }
      };
   };

   const handleFinish = () => {
      const { fromPrice, toPrice } = priceValues;
      if (!Number.isNaN(fromPrice) && !Number.isNaN(toPrice) && fromPrice > toPrice) {
         setError('Giá từ không được lớn hơn giá đến');
         return;
      }
      setFormData({
         fromPrice: priceValues.fromPrice,
         toPrice: priceValues.toPrice,
         type: checkBox.type,
         level: checkBox.level,
         area: checkBox.area,
      });
   };

   return (
      <>
         <div className="banner-container">
            <div className="banner">
               <img src="images/banner-2.jpg" alt="" />
            </div>
            <div className="content d-flex flex-column align-items-center">
               <h2 className="text-center">Danh sách khoá học</h2>
               <Breadcrumb separator=">" items={linkItems} />
            </div>
         </div>

         <div className="container py-5">
            <div className="row">
               {/* -------- FilterData -------- */}
               <Form className="col-12 col-md-3 mb-5" onFinish={handleFinish}>


                  <FilterBox title="Khoảng giá">
                     <FilterCurrency id="fromPrice" label="Từ giá" type="text" placeholder="0 VND" name="fromPrice"
                        onChange={handlePriceChange}
                        onFocus={handleFocus}
                     />
                     <FilterCurrency id="toPrice" label="Đến giá" type="text" placeholder="10,000,000 VND" name="toPrice"
                        onChange={handlePriceChange}
                        onFocus={handleFocus}
                     />
                     <div className="error-label">{error}</div>
                  </FilterBox>


                  <FilterBox title="Hình thức học" isCheckboxGroup onChange={handleCheckBoxChange('type')}>
                     <FilterCheckbox value="online">Online</FilterCheckbox>
                     <FilterCheckbox value="offline">Offline</FilterCheckbox>
                  </FilterBox>


                  <FilterBox title="Trình độ" isCheckboxGroup onChange={handleCheckBoxChange('level')}>
                     <FilterCheckbox value="easy" imageUrl="images/icon-title-course.png">
                        Dễ
                     </FilterCheckbox>
                     <FilterCheckbox value="medium" imageUrl="images/icon-title-course-2.png">
                        Trung bình
                     </FilterCheckbox>
                     <FilterCheckbox value="hard" imageUrl="images/icon-title-course-3.png">
                        Khó
                     </FilterCheckbox>
                     <FilterCheckbox value="expert" imageUrl="images/icon-title-course-4.png">
                        Cực khó
                     </FilterCheckbox>
                  </FilterBox>


                  <FilterBox title="Lĩnh vực" isCheckboxGroup onChange={handleCheckBoxChange('area')}>
                     <FilterCheckbox value="frontend">Front-End</FilterCheckbox>
                     <FilterCheckbox value="backend">Back-End</FilterCheckbox>
                     <FilterCheckbox value="database">Database</FilterCheckbox>
                     <FilterCheckbox value="faster">Cấp tốc</FilterCheckbox>
                     <FilterCheckbox value="other">Other</FilterCheckbox>
                     <FilterCheckbox value="stem">STEM</FilterCheckbox>
                  </FilterBox>


                  <Button type="primary" htmlType="submit" block style={{ background: '#FF4500' }}>
                     Tìm kiếm
                  </Button>
               </Form>

               {/*  Course Card  */}
               <div className="col-12 col-md-9">
                  <div className="d-flex justify-content-between mb-3">
                     <div className="font-weight-bold">{total} Khoá học</div>
                     <Select
                        onChange={(value) => setSortBy(value)}
                        style={{ width: 200 }}
                        placeholder="Sắp xếp khoá học"
                        options={filterItemsCourseSelection}
                     />
                  </div>

                  <div className="row" style={{ margin: '0 -8px' }}>
                     {letFilter.map((item, index) => (
                        <CourseCard key={index} courseData={item} />
                     ))}
                  </div>

                  <div className="d-flex justify-content-center mt-2">
                     {total > 0 && (
                        <Pagination
                           onChange={handlePaginationChange}
                           className="pagination-course"
                           total={total}
                           defaultCurrent={1}
                           defaultPageSize={6}
                        />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Course;
