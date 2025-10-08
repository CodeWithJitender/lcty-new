import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";

function VolunteerForm() {
  return (
    <section className="">
      <div className="container-fixed">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start">
          {/* Image */}
          <div className="h-full max-h-full" data-aos="fade-right">
            <img src="vol-form.jpg" alt="Kids Yoga" className=" w-full mb-5 h-full object-cover object-top" />
          </div>
          {/* Text Content */}
          <div className="" data-aos="fade-left">
            <h2 className="h1 mb-2 secondary-text-1">
              <span className="font-calvino">Volunteer</span>
              <span className="font-calvino-italic"> Form</span>
            </h2>
            <h2 className="h2 mb-4 secondary-text-1">
              <span className="font-calvino-italic">
                {" "}
                Lend a Heart. Leave an Impact{" "}
              </span>
            </h2>
            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              At Little Champs Therapy & Yoga, we believe that love is the
              beginning of genuine transformation and you can walk with us on
              that journey. Your effort and time can leave a lasting difference
              in the lives of our Little Champs and their families whether you
              are a student, professional or simply a compassionate person.
            </p>
            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              The first part of becoming a member of a compassionate community
              that works to create better tomorrows each day is filling out our
              volunteer form. We would be privileged to have you on our side if
              you believe that kindness, community and connection are strong.
            </p>

            <ButtonPrimary link="discover" text="Apply Now" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerForm;
