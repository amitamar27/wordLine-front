import React from "react";
import { postsService } from "../../../services/postsService";
import { Layout } from "@components/Layout";
import Link from "next/link";

export default function page({ post }) {
    return (
        <Layout>
            
            <div className="card">
                <div className="cardContent">
                    <h2>Details</h2>
                    <p className={"title"}>{post.id}</p>
                    <h3 className={"title"}>{post.title}</h3>
                    {/* <p className={"content"}>{post.content}</p> */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;
    const post = await postsService.getPostById(query.id);
    return {
        props: {
            post
        }
    };
}
