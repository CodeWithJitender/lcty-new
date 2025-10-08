import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";

function StudentForm() {
  return (
    <section className="">
      <div className="container-fixed">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start">
          {/* Image */}
          <div className="lg:order-2 h-full" data-aos="fade-left">
            <img src="student-form.jpg" alt="Kids Yoga" className=" w-full mb-5 h-full object-cover object-top" />
          </div>
          {/* Text Content */}
          <div className="lg:order-1" data-aos="fade-right">
            <h2 className="h1 mb-2 secondary-text-1">
              <span className="font-calvino">Student</span>
              <span className="font-calvino-italic"> Form </span>
            </h2>
            <h2 className="h2 mb-4 secondary-text-1">
              <span className="font-calvino-italic">
                Your First Step Toward Personalized Care
              </span>
            </h2>
            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              We’re so glad that you’re here and we’re ready to walk this
              journey with you.Our student form is designed to help us get to
              know your child better about their strengths, challenges and the
              beautiful goals you hope to reach together. This form allows us to
              create a therapy plan that’s uniquely designed for your child’s
              needs. Every detail you share helps us design sessions filled with
              care, understanding and purpose.
            </p>
            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              We know that filling out forms can feel overwhelming but don’t
              worry we’re here to support you every step of the way. If you have
              questions or need help at any point, our team is just a call or
              message away.
            </p>

            <ButtonPrimary link="discover" text="Apply Now" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentForm;
