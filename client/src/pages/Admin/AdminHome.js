import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Thapar Blood Bank App </h3>
          <hr />
          <p>
          Welcome to Thapar Blood Bank , where our primary mission is to bridge the crucial gap between those in need of life-saving blood and those who are willing to donate. With a deep commitment to quality and an unwavering dedication to the cause of saving lives, we stand as your trusted partner in ensuring a reliable and accessible blood supply for medical treatments, emergencies, and essential procedures.

What truly sets Thapar Blood Bank apart is our firm belief in community engagement. We've established our blood bank as a unifying platform that brings together donors and recipients to create a strong and compassionate network. This network not only provides vital support to those in need but also fosters a culture of care and kindness within our community.

Our advanced technology serves as the backbone of our operations. 
With a wide range of diverse blood types, we are equipped to meet the specific needs of patients from all walks of life.  Our stringent safety protocols are meticulously maintained to safeguard both donors and recipients throughout the entire blood donation journey.

. By becoming a donor with us, you become a hero—someone who plays a pivotal role in transforming lives. If you're a patient in need of blood, our blood request service is designed to connect you with donors in a timely and efficient manner. Through donor profiles, you can seamlessly manage your contribution history, schedule appointments, and stay informed about upcoming events.

In times of emergencies, our rapid response system ensures that life-saving blood reaches those who need it urgently. We also focus on education and awareness, offering valuable resources and inspiring stories that underline the significant impact of blood donation.

We extend an open invitation to join the Thapar Blood Bank family. By partnering with us, you're joining a community that's dedicated to making a positive change in the world—one drop at a time. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
