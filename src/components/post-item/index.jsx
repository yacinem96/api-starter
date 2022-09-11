import React from 'react'
import { Button, Card } from 'react-bootstrap';

export const PostItem = ({ post }) => {
    return (
        <>
            <Card className="mb-2 text-start shadow" >
                <Card.Body>
                    <Card.Title> {post.title}: {post.id}  </Card.Title>
                    <Card.Text >
                        <h5 className="text-success ">{post.body}</h5>
                    </Card.Text>
                    <Button variant='success' > add to cart</Button>

                </Card.Body>
            </Card>
        </>
    )
}
