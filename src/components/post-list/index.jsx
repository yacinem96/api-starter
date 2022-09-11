import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { PostItem } from '../post-item';

export const PostList = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch(err => console.log(err.message))

    }, []);
    return (
        <>
            <Container>
                
                <Row>
                    {posts ? posts.map((post) => {
                        return (
                            <Col key={post.id}>
                                <PostItem post={post} />
                            </Col>
                        )
                    }) : <h1>Aucun Post</h1>

                    }
                </Row>

            </Container>
        </>
    )
}
