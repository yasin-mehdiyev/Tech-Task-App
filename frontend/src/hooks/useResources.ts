// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectResourceSlice, setAllResources } from "../store/features/Resource/ResourceSlice";
// Models
import { Resource } from "../models/api/Resources/Resource";
// Services
import * as resourceServices from "../services/Resource/ResourceService";

const useResources = () => {
  const dispatch = useDispatch<any>();
  const resources: any = useSelector(selectResourceSlice);

  return {
    resources,
    getResources: async () => {
      try {
        const { data }  = await resourceServices.getAllResources();
        if (data) {
          const resourceData: Resource = new Resource(data);
          dispatch(setAllResources(resourceData));
        }
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default useResources;
