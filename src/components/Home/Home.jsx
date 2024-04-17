import KUCE from "../../assets/KUCE.jpg";
import Mining from "../../assets/Mining.jpg";
import Cse from "../../assets/Cse.jpg";
import It from "../../assets/IT.jpeg";
import EEE from "../../assets/EEE.jpg";
import ECE from "../../assets/ECE.jpeg";
const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <img
          className="w-full object-cover rounded-lg shadow-lg opacity-100"
          src={KUCE}
          alt="University College of Engineering"
        />
      </div>
      <div className="p-4">
    <p className="text-lg font-bold">Our Departments</p>
    <div className="grid grid-cols-5 gap-4">
        <div className="relative">
            <img
                className="w-full h-40 object-cover rounded-lg shadow-lg opacity-100"
                src={Mining}
                alt="Mining"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold bg-gray-800 bg-opacity-50 rounded-lg">MINING</p>
        </div>
        <div className="relative">
            <img
                className="w-full h-40 object-cover rounded-lg shadow-lg opacity-100"
                src={Cse}
                alt="CSE"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold bg-gray-800 bg-opacity-50 rounded-lg">CSE</p>
        </div>
        <div className="relative">
            <img
                className="w-full h-40 object-cover rounded-lg shadow-lg opacity-100"
                src={EEE}
                alt="EEE"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold bg-gray-800 bg-opacity-50 rounded-lg">EEE</p>
        </div>
        <div className="relative">
            <img
                className="w-full h-40 object-cover rounded-lg shadow-lg opacity-100"
                src={ECE}
                alt="ECE"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold bg-gray-800 bg-opacity-50 rounded-lg">ECE</p>
        </div>
        <div className="relative">
            <img
                className="w-full h-40 object-cover rounded-lg shadow-lg opacity-100"
                src={It}
                alt="IT"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold bg-gray-800 bg-opacity-50 rounded-lg">IT</p>
        </div>
    </div>
</div>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to University College of Engineering, Kothagudem
        </h1>
        <p className="text-gray-700 leading-relaxed">
          The Government of Andhra Pradesh, realizing the popular demand for
          enhancement of facilities for engineering education, adopted a
          far-reaching and progressive policy of encouraging philanthropic
          organizations to establish and manage technical institutions without
          straining the already meager financial resources of the state. As a
          consequence of such a policy decision, University College Of
          Engineering was established in the year 1978 as a constituent college
          of Kakatiya University, which is located at 7 km away from Kothagudem
          in Bhadradri Kothagudem district. This University College of
          Engineering had substantially improved its infrastructural facilities,
          added new B.Tech programs and attracted academicians of proven
          competence onto its faculty. The alumni of this institute are placed
          in reputed organizations all over India and all over the World and
          gained recognition amongst academic circles. The University College of
          Engineering, Kakatiya University (UCE-KU), (erstwhile Kothagudem
          School of Mines) has acres 390.21 gts of land. UCE offers B.Tech.
          programs in 05 disciplines at UG level i.e., B.Tech.,(CSE, EEE) in
          1996 and B.Tech.,(ECE and INF) in 2011 in addition to existing Mining
          Engineering. All the Five B.Tech Programs are approved by the All
          India Council for Technical Education, New Delhi with Institute
          P-Id:1-494515831. The AISHE Code of University College of Engineering
          is C-27616.
        </p>
      </div>
      <div className="container mx-auto py-8 px-4 ">
    <h1 className="text-3xl font-bold mb-4">Administration</h1>
    <div className="flex flex-wrap justify-evenly">
        <div className="flex flex-col items-center mr-8 mb-8">
            <p className="text-3xl font-bold mb-2">Dr. T. Jaganmohan Raju</p>
            <p>Principal</p>
        </div>
        <div className="flex flex-col items-center mr-8 mb-8">
            <p className="text-3xl font-bold mb-2">Prof. Malla Reddy Perati</p>
            <p>Registrar</p>
        </div>
        <div className="flex flex-col items-center mb-8">
            <p className="text-3xl font-bold mb-2">Prof. T. Ramesh</p>
            <p>Vice-Chancellor</p>
        </div>
    </div>
</div>


    </>
  );
};

export default Home;
