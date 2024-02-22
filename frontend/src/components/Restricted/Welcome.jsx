import { getUser } from "../../api/handleApis";
import { useQuery } from "react-query";

const Welcome = () => {
  const data = useQuery("userInfo", getUser, {
    onError: () => {
      console.log("error");
    },
  });

  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        <h2>Welcome!!</h2>
      </div>
      <div className="flex">
        <h2>Welcome!!</h2>
      </div>
    </div>
  );
};

export default Welcome;
