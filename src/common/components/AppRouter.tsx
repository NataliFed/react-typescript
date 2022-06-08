import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import {HomeFeature, ContactsFeature } from "../../features"


export const AppRouter = () => (
    <Routes>
        <Route path="/" element={<HomeFeature />} />
        <Route path="/contacts" element={<ContactsFeature />} />
    </Routes>
)