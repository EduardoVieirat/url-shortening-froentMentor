import "./style.css";
import fullyCustomizable from "../../assets/icon-fully-customizable.svg";
import brandRecognition from "../../assets/icon-brand-recognition.svg";
import detailedRecords from "../../assets/icon-detailed-records.svg";

import Image from "next/image";

export default function AdvancedStatistc() {
  return (
    <section className="advanced-statistc flex-center">
      <h1>Advanced Statistics</h1>
      <p>
        track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="infos-cards flex-center">
        <div className="info first flex-center">
          <div className="img-icon-info flex-center">
            <Image src={brandRecognition} />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing Branded links help instil confidance in your content.
          </p>
        </div>
        <div className="line" />
        <div className="info flex-center">
          <div className="img-icon-info flex-center">
            <Image src={detailedRecords} />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="line" />
        <div className="info thirt flex-center">
          <div className="img-icon-info flex-center">
            <Image src={fullyCustomizable} />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve Band awareness and content discoverability through
            customizable links. supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
