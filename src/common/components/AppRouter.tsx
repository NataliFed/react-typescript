import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import {HomeFeature, ContactsFeature } from "../../features"
import { PostItem } from "../../features/post/PostItem";


export const AppRouter = () => (
    <Routes>
        <Route path="/" element={<HomeFeature />} />
        <Route path="/contacts" element={<PostItem />} />
        <Route path="/post" element={<PostItem />} />
    </Routes>
)