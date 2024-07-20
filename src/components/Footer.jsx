import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="bg-[#282828] text-white py-8 mt-16 text-sm flex justify-center">
      <div className="container px-5 ms-[10vw]">
        <div className="flex flex-wrap justify-between">
          {/* Programs Section */}
          <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Data Science & AI</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Product Management</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Business Analytics</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Digital Transformation</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Business Management</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Project Management</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Strategy & Leadership</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Senior Management</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Fintech</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="mb-2">Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="underline">admissions@accredian.com</a></p>
            <p className="mb-2">Email us (For Product Management Queries): <a href="mailto:pm@accredian.com" className="underline">pm@accredian.com</a></p>
            <p className="mb-2">Data Science Admission Helpline: +91 9076539292 (9 AM - 7 PM)</p>
            <p className="mb-2">Product Management Admission Helpline: +91 9625811095</p>
            <p className="mb-2">Enrolled Student Helpline: +91 7969322507</p>
            <p className="mb-2">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
          </div>

          {/* Follow Us Section */}
          <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
            <h3 className="font-semibold text-lg mb-4">Why Accredian</h3>
            <p>Follow Us</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><YouTubeIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
            </div>
          </div>

          {/* Accredian Section */}
          <div className="w-full sm:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Accredian</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Career</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Admission Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Referral Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Master FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400">
          <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
