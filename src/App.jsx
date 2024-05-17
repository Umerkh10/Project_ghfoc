import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'
import Home from './Home'
import Subject from './Subject'
import Card_sub from './Card_sub'
import Home_form from './Home_form'
import Qualified from './Qualified'
import Achievement from './Achievement'
import Conf from './Conf'
import Sticky from './Sticky'
import Payment from './Payment'
import About from './About'
import About_Para from './About_Para'
import About_Card from './About_Card'
import About_Divider from './About_Divider'
import Online_Exam from './Online_Exam'
import Exam_banner from './Exam_banner'
import Service from './Service'
import Online_Class from './Online_Class'
import Class_banner from './Class_banner'
import Online_Course from './Online_Course'
import Course_banner from './Course_banner'
import Online_test from './Online_test'
import Test_banner from './Test_banner'
import Online_Homework from './Online_Homework'
import Homework_banner from './Homework_banner'
import Online_Assignment from './Online_Assignment'
import Assignment_banner from './Assignment_banner'
import Privacy from './Privacy'
import Term from './Term'
import Thank_You from './Thank_You'
import Order_form from './Order_form'
import ScrollToTop from './ScrollToTop'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><ScrollToTop/><Outlet /><Footer /></>,
      children: [
        {
          path: "",
          element: <> <Home /> <Subject /> <Card_sub /> <Home_form /> <Qualified /> <Achievement/> <Conf/> <Sticky /> <Payment />  </>,
        }, {
          path: "Contact",
          element: <> <Contact /> <Sticky />  </>
        },
        {
          path: "About",
          element: <> <About /> <About_Para /> <About_Card /> <About_Divider /> <Sticky /> </>
        },
        {
          path: "Service",
          element: <><Service /><Outlet /></>,
          children: [{
            path: "Online_Exam",
            element: <> <Online_Exam /> <Subject /> <Exam_banner />  <Home_form /> <Qualified /> <Achievement/> <Conf/>  <Sticky /> <Payment />  </>,
          }
            , {
            path: "Online_Class",
            element: <> <Online_Class /> <Subject /> <Class_banner/>  <Home_form /> <Qualified /> <Achievement/> <Conf/> <Sticky /> <Payment />  </>,
          }
          , {
            path: "Online_Course",
            element: <> <Online_Course /> <Subject /> <Course_banner/>  <Home_form /> <Qualified /> <Achievement/> <Conf/> <Sticky /> <Payment />  </>,
          }
          , {
            path: "Online_test",
            element: <> <Online_test /> <Subject /> <Test_banner/>  <Home_form /> <Qualified /> <Achievement/> <Conf/> <Sticky /> <Payment />  </>,
          }
          , {
            path: "Online_Homework",
            element: <> <Online_Homework /> <Subject /> <Homework_banner/>  <Home_form /> <Qualified /> <Achievement/> <Conf/> <Sticky /> <Payment />  </>,
          }
          , {
            path: "Online_Assignment",
            element: <> <Online_Assignment /> <Subject /> <Assignment_banner/>  <Home_form /> <Qualified /> <Achievement/> <Conf/>  <Sticky /> <Payment />  </>,
          }
        ]
        },
        {
          path: "Privacy",
          element: <> <Privacy/> <Sticky /> </>
        },
        {
          path: "Term",
          element: <> <Term/> <Sticky /> <Payment /> </>
        },
        {
          path: "Thank_You",
          element: <> <Thank_You/> <Sticky /> <Payment /> </>
        },
        {
          path: "Order_form",
          element: <> <Order_form/> <Sticky /> <Payment /> </>
        },
      ]
    },

  ])


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
