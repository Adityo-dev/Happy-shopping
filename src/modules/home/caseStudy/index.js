import style from "./case.module.css";

export default function CaseStudies() {
  return (
    <section>
      <div className={style.CaseStudies}>
        <div>
          <h2>Case Studies</h2>

          <div>
            <p>2024</p>
            <h3>Uwang Corp.</h3>
          </div>
        </div>

        <div>
          <div>
            <p>21/05/2024</p>
            <h3>
              Mika <br /> Medika
            </h3>
            <p>
              Mika Medika Healthcare, a large hospital network, was concerned
              about the security of their patient data.
            </p>
          </div>

          <div>
            <p>2024</p>
            <h3>DEF Manufacture</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
