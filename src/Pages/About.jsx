
import styled from "styled-components";
import about1Image from "../assets/about1.gif";
import about2Image from "../assets/about2.png";

const AboutContiner = styled.div`
  padding: 20px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.p`
  margin: 45px;
  font-size: 34px;
  text-align: center;
  font-weight: bold;
  @media (max-width: 600px){
    margin: "10px;
    
  }
  `;

const ContentContainer = styled.div`
display: flex;


@media (max-width: 600px) {
  flex-direction: column;
}
`;


const Image = styled.img`
  width: 400px;
  height: 300px;
  margin: 0px 10px;
  border-radius: 5px;


  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin: 10px 0;
  }
`;
const Quote = styled.blockquote`
  padding: 20px;
`;

function About() {
  return (
    <AboutContiner>
      <Title>About us</Title>
      <ContentContainer>
        <Image src={about1Image} alt="gym pic 1" />

        <Quote>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sit
          consectetur, laboriosam assumenda ducimus fugit ad at sapiente
          repellendus asperiores magni blanditiis ex error quis itaque eligendi
          veritatis temporibus deserunt incidunt nisi. Magni illo aperiam, in
          quo, a totam laboriosam at et aliquid quisquam vitae optio alias
          provident dolorum cum quasi consectetur! Laborum ratione, nemo porro
          pariatur suscipit voluptatum molestiae voluptas eum delectus cum vitae
          odit unde veniam ipsa hic ad amet. Accusamus fugiat pariatur provident
          sit qui. Laudantium pariatur nam odit laborum hic iure sapiente sint
          consequatur rerum provident officia repellat quo, magni, quis
          molestias quidem quasi eligendi sequi?Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Ipsam perferendis officia consectetur
          magnam, commodi possimus corrupti delectus itaque at eligendi quasi
          suscipit deleniti. Perspiciatis doloribus dignissimos voluptatibus
          maiores distinctio minus, atque ea laudantium adipisci, vel at id
          quisquam aperiam ducimus fugit placeat quod? Deserunt magni, iusto aut
          eos sit et amet nesciunt, perspiciatis excepturi quisquam, dolorem
          commodi quos soluta obcaecati facilis. Suscipit molestias corporis
          facere porro ducimus voluptate, sapiente nulla quaerat magnam magni
          quia reiciendis dolor sit necessitatibus at dolorum tempora modi ad
          minima deserunt officiis possimus. Aliquid earum voluptatem quia ipsa
          maxime obcaecati error nam facilis unde. Deleniti, voluptas.
        </Quote>
      </ContentContainer>

      <ContentContainer>
        <Image src={about2Image} alt="gym pic 2" />
        <Quote>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sit
          consectetur, laboriosam assumenda ducimus fugit ad at sapiente
          repellendus asperiores magni blanditiis ex error quis itaque eligendi
          veritatis temporibus deserunt incidunt nisi. Magni illo aperiam, in
          quo, a totam laboriosam at et aliquid quisquam vitae optio alias
          provident dolorum cum quasi consectetur! Laborum ratione, nemo porro
          pariatur suscipit voluptatum molestiae voluptas eum delectus cum vitae
          odit unde veniam ipsa hic ad amet. Accusamus fugiat pariatur provident
          sit qui. Laudantium pariatur nam odit laborum hic iure sapiente sint
          consequatur rerum provident officia repellat quo, magni, quis
          molestias quidem quasi eligendi sequi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptas suscipit temporibus alias,
          nostrum placeat adipisci odit cupiditate atque delectus reprehenderit
          magni dicta, qui necessitatibus. Illum earum porro natus corrupti nisi
          assumenda aliquid explicabo, eos odit dolorem odio at. Nobis, tenetur
          fuga eaque incidunt doloremque quisquam atque dolor adipisci est
          dolorum eum, laboriosam inventore sit deleniti reiciendis ipsum!
          Eligendi veniam magnam, quaerat illo ea earum dolorum odit autem esse
          at voluptates accusamus accusantium et omnis culpa nisi velit
          repellendus a mollitia, dolorem dolore, ipsum incidunt illum?
          Quibusdam iste, similique eligendi fugiat nulla tempora atque quasi
          autem, dignissimos explicabo maxime culpa suscipit?
        </Quote>
      </ContentContainer>

      {/* <div className="mt-6 flex flex-col gap-1 sm:flex-row ">
        <input
          type="text"
          placeholder="Enter your email"
          className="focus:outline-none p-1 rounded-full px-3 placeholder:text-sm"
        />
        <button className="bg-blue-600 rounded-full p-2 text-sm text-white px-3">
          Subscribe
        </button>
      </div> */}
    </AboutContiner>
  );
}

export default About;
