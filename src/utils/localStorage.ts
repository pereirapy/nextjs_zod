"use client"

import { LOCAL_STORAGE_FAVORITES_PROPERTIES } from "@/config/constants";
import { Property } from "@/types/property";

export const savePropertyAsFavorite = (newData: Property) => {
  if(typeof localStorage === 'undefined') return;

  const dataInJson = restorePropertyAsFavorite();
  let dataOldAndNew = [
    newData,
  ]

  if(dataInJson && dataInJson.length > 0) {
    dataOldAndNew = [
      newData,
      ...dataInJson
    ]
  }
  localStorage.setItem(
    LOCAL_STORAGE_FAVORITES_PROPERTIES,
    JSON.stringify(dataOldAndNew),
  );

}

export const restorePropertyAsFavorite = (): Property[]| undefined => {
  if(typeof localStorage === 'undefined') return;

  const dataRestored = localStorage.getItem(
    LOCAL_STORAGE_FAVORITES_PROPERTIES);
    return dataRestored ? JSON.parse(dataRestored): [];
}