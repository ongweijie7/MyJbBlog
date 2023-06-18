import "./Form.css";
import React, { useState } from 'react';


const Form = () => {
    const [isLoading, setIsLoading] = useState(false);


    const [title, setTitle] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [hook, setHook] = useState('');
    const [openingHours, setOpeningHours] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [cost, setCost] = useState('');
    const [atmosphere, setAtmosphere] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImage1 = (e) => {
        setImage1(e.target.value);
    };

    const handleImage2 = (e) => {
        setImage2(e.target.value);
    };

    // const handleHook = (e) => {
    //     setHook(e.target.value);
    // };

    const handleOpeningHours = (e) => {
        setOpeningHours(e.target.value);
    };

    const handleIntroduction = (e) => {
        setIntroduction(e.target.value);
    };

    // const handleCost = (e) => {
    //     setCost(e.target.value);
    // };

    // const handleAtmosphere = (e) => {
    //     setAtmosphere(e.target.value);
    // };

    const handleSubmit = (event) => {
        setIsLoading(true);
        event.preventDefault();

        const images = { image1, image2};
        const details = { hook, openingHours, introduction, cost, atmosphere };
        const blogPost = { title, images, details };
        const jsonString = JSON.stringify(blogPost);
        
        const createPost = async (post) => {
            try {
                const url = "http:localhost:3000/food/create";
                const createPost= await fetch("http://localhost:3000/food/create", {
                    method: "POST",
                    headers: {
                      "Content-Type" : "application/json"
                    },
                    body: post
                });
                const response = await createPost;
                const reply = await response.text();
                console.log(reply);
            } catch (error) {
                console.log(error);
            }
        }
        createPost(jsonString);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

    };

    return (
    <div className="form-container">
        <h2>Have something to share?</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Title of the dish"
            value={title}
            onChange={handleTitleChange}
        />
        <input
            type="text"
            placeholder="image1"
            value={image1}
            onChange={handleImage1}
        />
        <input
            type="text"
            placeholder="image2"
            value={image2}
            onChange={handleImage2}
        />
        {/* <textarea
            placeholder="hook"
            value={hook}
            onChange={handleHook}
        /> */}
        <input
            placeholder="opening hours"
            value={openingHours}
            onChange={handleOpeningHours}
        />
        <textarea
            placeholder="introduction"
            value={introduction}
            onChange={handleIntroduction}
        />
        {/* <textarea
            placeholder="cost"
            value={cost}
            onChange={handleCost}
        />
        <textarea
            placeholder="atmosphere"
            value={atmosphere}
            onChange={handleAtmosphere}
        /> */}
        <button type="submit" onSubmit={handleSubmit} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Post"}
        </button>
        </form>
    </div>
    );
};

export default Form;
