import React, { Suspense } from "react";
import { fetchProfileData, Post } from "./fakeApi";

const resource = fetchProfileData();

function ProfilePage() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails() {
  const user = resource.user.read();

  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}

export default ProfilePage;

//Curious 好奇
/**
 * 1. fetch-on-render
 * 2. fetch-then-render
 * 3. render-as-you-fetch
 */
