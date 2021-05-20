import { useState, useEffect } from 'react';
// This dependency will be used for API calling
// import axios from 'axios';
import TreeData from '../treeData';

const INITIAL_STATES = {
  loading: false,
  data: [],
  error: false
}

const useTreeData = () => {
  const [treeData, setTreeData] = useState(INITIAL_STATES);
  const [didMount, setDidMount] = useState(false); 

  const getTreeData = () => {
    // Setting loading states
    setTreeData((data) => ({
      ...data,
      error: false,
      loading: true
    }));

    // TODO: Fetching data from API
    //  Calling an API
    //   axios.get(URL)
    //   .then((response) => {
    //     setTreeData((data) => ({
    //       ...data,
    //       error: false,
    //       loading: false,
    //       games: response.data.data || []
    //     }));
    //   })
    //   .catch(() => {
    //     setTreeData((data) => ({
    //       ...data,
    //       loading: false,
    //       error: true,
    //     }));
    // });
    
    // Adding manually timeout to make it behave as if we are fetching data from API
    setTimeout(() => {
      setTreeData((data) => ({
        ...data,
        error: false,
        loading: false,
        data: TreeData
      }));
    }, 600)
  }

  useEffect(() => {
    setDidMount(true);
    getTreeData();
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return INITIAL_STATES;
  }

  return { ...treeData, getTreeData };
}

export default useTreeData;
