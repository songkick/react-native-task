import React, { createContext, useState, useContext, useEffect } from "react";

import { getData, setData } from "../utils/Storage";

export const LikedContext = createContext();

export function useLikes() {
  return useContext(LikedContext);
}

export const LikedProvider = ({ children }) => {
  const [likedIds, setLikedIds] = useState([]);

  useEffect(() => {
    (async () => {
      setLikedIds((await getData("likes")) ?? []);
    })();
  }, []);

  const addId = async (id) => {
    const ids = new Set([...likedIds]);

    if (!ids.has(id)) {
      ids.add(id);
    }

    await setData("likes", [...ids]);
    setLikedIds([...ids]);
  };

  const deleteId = async (id) => {
    const ids = new Set([...likedIds]);

    if (ids.has(id)) {
      ids.delete(id);
    }

    await setData("likes", [...ids]);
    setLikedIds([...ids]);
  };

  const contextValue = {
    addId,
    deleteId,
    ids: likedIds,
  };

  return (
    <LikedContext.Provider value={contextValue}>
      {children}
    </LikedContext.Provider>
  );
};
