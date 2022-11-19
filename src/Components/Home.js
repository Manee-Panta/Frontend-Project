import React, { useState, useEffect } from "react";
import "../style/home.css";
import MainNav from "./MainNav";
import Footer from "./Footer";
// import { client } from "../client";

const Home = () => {
  // Practice Start
//   const [post, setPost] = useState([]);
//   const getAllEntries = async () => {
//     try {
//       await client.getEntries().then((entries) => {
//         const result = entries;
//         console.log(entries);
//         setPost(result);
//         console.log(post);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getAllEntries();
//   }, []);
  return (
    <>
      <MainNav />
      <div className="homeMain">
        <div>
          <div className="homeimg">
            <div className="textLayer">
              <h1>Get your </h1>
              <h1>dream Job </h1>
              <h1>Today</h1>
            </div>
            {/* <h2>"Choose a job you love, and you will never have to work a day in your life</h2> */}
          </div>
          {/* Hero Section Start */}
          <div className="heroSection">
            <div className="heroElement">
              <h1>19K+</h1>
              <h3 style={{ fontSize: "15px" }}>Ready Job Vaccancy</h3>
            </div>
            <div className="heroElement">
              <h1>276K+</h1>
              <h3 style={{ fontSize: "15px" }}>Job Seekers Active</h3>
            </div>
            <div className="heroElement">
              <h1>34K+</h1>
              <h3 style={{ fontSize: "15px" }}>Incorporated Company</h3>
            </div>
          </div>
          {/* Hero Section End */}
          <div className="jobCategoty">
            <h3>Popular Job Categories</h3>
            <p>A better career is out there. we'll help ypu find it . We are your first step to becomimg everything you want to be</p>
            <div className="content">
              <div className="contentBox">
                <img src="" alt="no image" />
                <h3>frontend developer</h3>
                <h5>(4 vacancies)</h5>
              </div>
            </div>

          </div>

          {/* Top Company Start */}
//           <div className="companyMain">
//             {post?.items?.map((posts, i) => {
//               return (
//                 <div className="companyData" key={posts.sys.id}>
//                   <div className="companyDetails">
//                     <h3> {posts.fields.companyName} </h3>
//                     <h3> {posts.fields.companyDescription} </h3>
//                     {/* <h3> {posts.fields.companyImage.fields.title} </h3> */}
//                     <img
//                       src={posts.fields.companyImage.fields.file.url}
//                       alt="Image"
//                     />
//                   </div>
//                 </div>
//               );
//             })}
          </div>

          {/* Top Company End*/}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
