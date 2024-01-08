import propTypes from "prop-types";
import "./card.css";

const obj = [
  {
    type: "FREE",
    pay: "$0/month",
    accesses: [
      "Single User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
    ],
    noAccess: [
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
  },
  {
    type: "PLUS",
    pay: "$9/month",
    accesses: [
      "Single User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
    ],
    noAccess: ["Monthly Status Reports"],
  },
  {
    type: "PRO",
    pay: "$49/month",
    accesses: [
      "Single User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    noAccess: [],
  },
];

const Card = ({ type, pay, accesses, noAccess }) => (
  <div className="card">
    <p className="type">{type}</p>
    <h1>{pay}</h1>
    <hr></hr>

    <div className="accessContents">
      {accesses.map((e) => (
        <p className="haveAccess" key={e}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAiBJREFUSEulVsFxgzAQXJVBXjzlGTPjElyKqSRxJU4nODXEmZAfL9NEPAoIASd0h4Sjjz3ySXt3e7uyQupSAAwT7PbthxTjjtGY/vu0IucAMBHBFs1ErsoDDsIiVQYpS3kJ+9GK53P+DdJ+SgFK6lQq9UMcvSWN6AE4Tu46WePQbbjnOY6DKv28VvHJ7Mka2fDLVsqGihmKVil4ih8fxAOe72Oml8ozQWa63b8C+Kiz21WSP+sLW6dawUzGtmuLiwFOABrAlBZ8sdaHaxu6LUDfi0sH2IP2KwR2bSXAjNVJTiQkpFsBVLg6Whd1KNpSejAANaasX/wWe+PFy0ByIn6qxEoZXgezUnbeVtWq2+JUZ5/vUlti7Q0eErcRejVB0G1RATh2D/Fbnd3OS3/S7Z4ZpK8r/3CH7ubk5LdRt4cceFSAyfvGdGKZwd30KuDkbLpRMOW3lU2KYS9avTwygyMf8h3ArWSUk4xBA2XKn+x2HfmzFUtumNLqPqYHV3hUBiM4ejM4OqdtDDWIQDayHgnHjE267HbtITeu7UMptvoGwORKcR34nut5NaWfb/tvBagctL32EOMQEXdIsszx8dB3O3CXTojnyX83utuYTxJw1NpWrIC6Hh26VR3T7MJ/N05ktNUbMgwfiYBoWZcpAyV5uzhcKcmP3E8PccQ7aPy/OJYqThl0keN4NREKpldo/meyTJT1aqnVQZUBPqNpZusP1G0oNCgsSF0AAAAASUVORK5CYII=" />
          {e}
        </p>
      ))}
      {noAccess.map((e) => (
        <p className="dontHaveAccess" key={e}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlxJREFUSEutVm2S2jAMfUovws6WWecW7EkKJ+lRaE8Cp1hDoQMniTv+iuXYcsxM82s3kfWkp/dkCP/lIQBmzpT/lwD4e/u3/ITIdKB40Vd2JU8JLJVbQCzr7+yYFRFS9tFVbzFvqV57mR/o7jKEungCwYTJSsBy4vaMORcvFOeO8VpCoU6A8X2Rb0WSPMe6stY6XhHra2C8HCmxHZPwxFofSm2mYfg5men3Vl/OnMalQ29K7Qai43et36LGJUYZcIUWAu5qPAHYkcFzgjlsLwE8ooZjDhR0Cq0837V+q/ZU2qnqKgu8J8IxfH1OpgS/qXE3EE5O4mQwGXzGAluSyRErA70rtSfQ0SYFaAa3oX88vZYV90zGzKCtldieMSvXgRP5zh3tOFgXfwugtiQTQFeM4bzW5eNY+Uy7axxPABv/Lae3EGBdPkttLgnKT6XOPbqn185Ue8Vnm6NFNouVw9KXYJl5pp52We28LbdiRVU30AvQFOsFd72c560YRNra59VLYjmWJahV72BnHAWH0Lm+nhNYfqlkPxZ61mEN1PrUnr2NwWpM7cW8Kyx6dTRuihk0aIn7NB7LrGY7n5dMfnWmGUc7yZcI/o7jI9pGXg6Eu/pIPif69f71dWj5Y3WBPD7GzUQ4OeXq65nfqcvE91HtAfqx1foz/RCKUXl3ArDg+DJbyNqgTHBJeTvxHBL+6zgFPCVVv5CNLYGMhIpF6roleGBpafBEEljPuhPt1Dzcx0SKkuKDtdors1RgjVK+odaumuXl0bZTN425IvllUKrKz1YEXtto3TUJgf8AXJ5TNMJ96tAAAAAASUVORK5CYII=" />
          {e}
        </p>
      ))}
    </div>

    <button className="button">Button</button>
  </div>
);

Card.propTypes = {
  type: propTypes.string.isRequired,
  pay: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.object,
  ]),
  accesses: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.object,
  ]),
  noAccess: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.object,
  ]),
};

function Cards() {
  return (
    <>
      <div className="cards">
        <Card {...obj[0]} />
        <Card {...obj[1]} />
        <Card {...obj[2]} />
      </div>
    </>
  );
}

export default Cards;
