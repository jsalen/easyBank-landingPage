import React from "react";
import iconBudgeting from "../../statics/images/icon-budgeting.svg";
import iconOnline from "../../statics/images/icon-online.svg";
import iconOnboarding from "../../statics/images/icon-onboarding.svg";
import iconAPI from "../../statics/images/icon-api.svg";

import "../../statics/styles/About.css";

const About = () => {
  return (
    <section className="about">
      <article className="about__header">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </article>
      <article className="about__cards">
        <div className="card">
          <div className="card__image">
            <img src={iconOnline} alt="Icon Online" />
          </div>
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={iconBudgeting} alt="Icon Budgeting" />
          </div>
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you're close to your hitting limits.
          </p>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={iconOnboarding} alt="Icon Onboarding" />
          </div>
          <h3>Fast Onboarding</h3>
          <p>
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={iconAPI} alt="Icon API" />
          </div>
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
