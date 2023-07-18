"use client";

import React, { useEffect, useState } from "react";
import { PostsList } from "@components/Posts/PostsList";
import { postsService } from "../../services/postsService";
import { Layout } from "@components/Layout";

export default function posts({ posts }) {
    return (
        <Layout>
            <PostsList posts={posts} />
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { req } = context;
    const posts = await postsService.fetchPosts();
    return {
        props: {
            posts
        }
    };
}
