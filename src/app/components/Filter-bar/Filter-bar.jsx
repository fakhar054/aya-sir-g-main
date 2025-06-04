// "use client";
// import React, { useContext, useState } from "react";
// import "./filter_bar.css";
// import { IoFilter } from "react-icons/io5";
// import { UserContext } from "@/app/userContext";
// import { useSearchParams } from "next/navigation";

// export default function Filter_bar() {
//   //categoryId
//   // const searchParms = useSearchParams();
//   // const selectedCategoryId = searchParms.get("categoryId");

//   // const { apiCategory2, setapiCategories2 } = useContext(UserContext);

//   // const [active, setActive] = useState(false);
//   // const handleFilterBar = () => {
//   //   setActive(!active);

//   return (
//     <h1>i am compnies</h1>
//     // <section className="filter_bar">
//     //   <p
//     //     id="filter_heading"
//     //     className="p-2 filter_small"
//     //     onClick={handleFilterBar}
//     //   >
//     //     <IoFilter />
//     //     Filters
//     //   </p>
//     //   <p id="filter_heading" className="p-2 filter_greater">
//     //     Filters
//     //   </p>
//     //   <div className={`boxes_parent_div ${active ? "active" : ""}`}>
//     //     <div className="box py-2 px-3">
//     //       <h3>Gender</h3>
//     //       <div className="form_div">
//     //         <input type="checkbox" id="gender_check_box" />
//     //         <label htmlFor="gender_check_box">Male</label>
//     //       </div>
//     //       <div className="form_div">
//     //         <input type="checkbox" id="gender_check_box" />
//     //         <label htmlFor="gender_check_box">Female</label>
//     //       </div>
//     //     </div>
//     //     <div className="box py-2 px-3">
//     //       <h3>Age</h3>
//     //       <div className="form_div">
//     //         <input type="checkbox" id="gender_check_box" />
//     //         <label htmlFor="gender_check_box">20-35 Years</label>
//     //       </div>
//     //       <div className="form_div">
//     //         <input type="checkbox" id="gender_check_box" />
//     //         <label htmlFor="gender_check_box">35-50 Years</label>
//     //       </div>
//     //       <div className="form_div">
//     //         <input type="checkbox" id="gender_check_box" />
//     //         <label htmlFor="gender_check_box">50+ Years</label>
//     //       </div>
//     //     </div>

//     //     <div className="box py-2 px-3">
//     //       <h3>Categories</h3>
//     //       {apiCategory2.map((item, ind) => (
//     //         <div className="form_div" key={ind}>
//     //           <input
//     //             type="checkbox"
//     //             id={item.id}
//     //             checked={item.id.toString() === selectedCategoryId}
//     //           />
//     //           <label htmlFor={item.id}>{item.name}</label>
//     //         </div>
//     //       ))}
//     //     </div>
//     //     <div className="box py-2 px-3 city">
//     //       <h3>City</h3>
//     //       <div className="form_div">
//     //         <input type="checkbox" id="gender_check_box" />
//     //         <label htmlFor="gender_check_box">Karachi</label>
//     //       </div>
//     //       <div className="form_div">
//     //         <input type="checkbox" id="gender_check_box" />
//     //         <label htmlFor="gender_check_box">Lahore</label>
//     //       </div>
//     //       <div className="form_div">
//     //         <input type="checkbox" id="gender_check_box" />
//     //         <label htmlFor="gender_check_box">Islamabad</label>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
//   );
// }

// "use client";
// import React, { useContext, useState, useEffect } from "react";
// import "./filter_bar.css";
// import { IoFilter } from "react-icons/io5";
// import { UserContext } from "@/app/userContext";
// import { useSearchParams } from "next/navigation";

// export default function Filter_bar() {
//   const searchParams = useSearchParams();
//   const selectedCategoryIdFromURL = searchParams.get("categoryId");

//   const { apiCategory2, setapiCategories2 } = useContext(UserContext);
//   const [active, setActive] = useState(false);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(
//     selectedCategoryIdFromURL || ""
//   );

//   const handleFilterBar = () => {
//     setActive(!active);
//   };

//   const handleCategoryChange = (id) => {
//     const newSelectedId = selectedCategoryId === id ? "" : id;
//     setSelectedCategoryId(newSelectedId);

//     const updatedCategories = apiCategory2.map((cat) => ({
//       ...cat,
//       selected: cat.id.toString() === newSelectedId,
//     }));

//     setapiCategories2(updatedCategories);
//   };

//   useEffect(() => {
//     console.log("Selected Category ID:", selectedCategoryId);
//   }, [selectedCategoryId]);

//   return (
//     <section className="filter_bar">
//       <p
//         id="filter_heading"
//         className="p-2 filter_small"
//         onClick={handleFilterBar}
//       >
//         <IoFilter />
//         Filters
//       </p>
//       <p id="filter_heading" className="p-2 filter_greater">
//         Filters
//       </p>

//       <div className={`boxes_parent_div ${active ? "active" : ""}`}>
//         {/* Gender */}
//         <div className="box py-2 px-3">
//           <h3>Gender</h3>
//           <div className="form_div">
//             <input type="checkbox" id="gender_male" />
//             <label htmlFor="gender_male">Male</label>
//           </div>
//           <div className="form_div">
//             <input type="checkbox" id="gender_female" />
//             <label htmlFor="gender_female">Female</label>
//           </div>
//         </div>

//         {/* Age */}
//         <div className="box py-2 px-3">
//           <h3>Age</h3>
//           <div className="form_div">
//             <input type="checkbox" id="age_20_35" />
//             <label htmlFor="age_20_35">20-35 Years</label>
//           </div>
//           <div className="form_div">
//             <input type="checkbox" id="age_35_50" />
//             <label htmlFor="age_35_50">35-50 Years</label>
//           </div>
//           <div className="form_div">
//             <input type="checkbox" id="age_50_plus" />
//             <label htmlFor="age_50_plus">50+ Years</label>
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="box py-2 px-3">
//           <h3>Categories</h3>
//           {apiCategory2.map((item) => (
//             <div className="form_div" key={item.id}>
//               <input
//                 type="checkbox"
//                 id={`category_${item.id}`}
//                 checked={selectedCategoryId === item.id.toString()}
//                 onChange={() => handleCategoryChange(item.id.toString())}
//               />
//               <label htmlFor={`category_${item.id}`}>{item.name}</label>
//             </div>
//           ))}
//         </div>

//         {/* City */}
//         <div className="box py-2 px-3 city">
//           <h3>City</h3>
//           <div className="form_div">
//             <input type="checkbox" id="city_karachi" />
//             <label htmlFor="city_karachi">Karachi</label>
//           </div>
//           <div className="form_div">
//             <input type="checkbox" id="city_lahore" />
//             <label htmlFor="city_lahore">Lahore</label>
//           </div>
//           <div className="form_div">
//             <input type="checkbox" id="city_islamabad" />
//             <label htmlFor="city_islamabad">Islamabad</label>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useContext, useState, useEffect } from "react";
import "./filter_bar.css";
import { IoFilter } from "react-icons/io5";
import { UserContext } from "@/app/userContext";
import { useSearchParams } from "next/navigation";

export default function Filter_bar() {
  const searchParams = useSearchParams();
  const selectedCategoryIdFromURL = searchParams.get("categoryId");

  // const { apiCategory2, setapiCategories2 } = useContext(UserContext);
  const [active, setActive] = useState(false);
  // const [selectedCategoryId, setSelectedCategoryId] = useState(
  //   selectedCategoryIdFromURL || ""
  // );

  const handleFilterBar = () => {
    setActive(!active);
  };

  // const handleCategoryChange = (id) => {
  //   if (selectedCategoryId === id) {
  //     return;
  //   }
  //   setSelectedCategoryId(id);

  //   const updatedCategories = apiCategory2.map((cat) => ({
  //     ...cat,
  //     selected: cat.id.toString() === id,
  //   }));

  //   setapiCategories2(updatedCategories);
  // };

  // useEffect(() => {
  //   console.log("Selected Category ID:", selectedCategoryId);
  // }, [selectedCategoryId]);

  return (
    <section className="filter_bar">
      <p
        id="filter_heading"
        className="p-2 filter_small"
        // onClick={handleFilterBar}
      >
        <IoFilter />
        Filters
      </p>
      <p id="filter_heading" className="p-2 filter_greater">
        Filters
      </p>

      <div className={`boxes_parent_div ${active ? "active" : ""}`}>
        <div className="box py-2 px-3">
          <h3>Gender</h3>
          <div className="form_div">
            <input type="checkbox" id="gender_male" />
            <label htmlFor="gender_male">Male</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_female" />
            <label htmlFor="gender_female">Female</label>
          </div>
        </div>

        <div className="box py-2 px-3">
          <h3>Age</h3>
          <div className="form_div">
            <input type="checkbox" id="age_20_35" />
            <label htmlFor="age_20_35">20-35 Years</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="age_35_50" />
            <label htmlFor="age_35_50">35-50 Years</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="age_50_plus" />
            <label htmlFor="age_50_plus">50+ Years</label>
          </div>
        </div>

        <div className="box py-2 px-3">
          <h3>Categories</h3>
          {/* {apiCategory2.map((item) => (
            <div className="form_div" key={item.id}>
              <input
                type="checkbox"
                id={`category_${item.id}`}
                checked={selectedCategoryId === item.id.toString()}
                onChange={() => handleCategoryChange(item.id.toString())}
              />
              <label htmlFor={`category_${item.id}`}>{item.name}</label>
            </div>
          ))} */}
        </div>

        <div className="box py-2 px-3 city">
          <h3>City</h3>
          <div className="form_div">
            <input type="checkbox" id="city_karachi" />
            <label htmlFor="city_karachi">Karachi</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="city_lahore" />
            <label htmlFor="city_lahore">Lahore</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="city_islamabad" />
            <label htmlFor="city_islamabad">Islamabad</label>
          </div>
        </div>
      </div>
    </section>
  );
}
