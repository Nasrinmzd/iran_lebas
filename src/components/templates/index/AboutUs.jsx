import Button from "../../../ui/Button";

function AboutUs() {
  return (
    <section className="flex justify-center items-center mb-[150px]  bg-[url(/images/bgabout.png),_url(/images/bgabout1.png)] bg-no-repeat bg-[position:left,_right]">
      <div className="w-[1072px] h-[381px] flex justify-center items-center">
        <img className="w-[381px] h-[381px] ml-8" src="/images/aboutus.png" alt="" />
        <div>
          <p className="mb-[23px] font-normal text-lg leading-8 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله{" "}
          </p>
          <Button>درباره ما</Button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
