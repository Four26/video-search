import React from 'react';
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import VideoRelated from './VideoRelated';
import Comment from './Comment';

describe('Header', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders the title', () => {
        render(<Header />);
        const title = screen.getByText('Video Search');
        expect(title).toBeInTheDocument();
    });

    it('renders the search input and displays the video result when Enter key is pressed', async () => {
        const onSearchMock = jest.fn((query) => Promise.resolve(`https://www.youtube.com/embed/${query}`));
        render(<Header onSearch={onSearchMock} />);
        const searchInput = screen.getByPlaceholderText('Search...');
        userEvent.type(searchInput, 'test{enter}');
        await waitFor(() => expect(onSearchMock).toHaveBeenCalledTimes(1));
        const videoIframe = await screen.findByTitle('video player');
        expect(videoIframe).toBeInTheDocument();

        const relatedVideos = ['related1', 'related2', 'related3'];
        render(<VideoRelated videos={relatedVideos} />);
    });
});

describe('Comment', () => {
    it('renders the comment input', () => {
        render(<Comment onAddComment={() => { }} />);
        const commentInput = screen.getByPlaceholderText('Add a comment...');
        expect(commentInput).toBeInTheDocument();
    });

    it('adds a comment when the user submits the form', () => {
        const addCommentMock = jest.fn();
        render(<Comment onAddComment={addCommentMock} />);
        const commentInput = screen.getByPlaceholderText('Add a comment...');
        const submitButton = screen.getByText('Submit');
        fireEvent.change(commentInput, { target: { value: 'test comment' } });
        fireEvent.click(submitButton);
        expect(addCommentMock).toHaveBeenCalledWith('test comment');
    });
});

