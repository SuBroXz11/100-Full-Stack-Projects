import json
import os  
from post import Post
import datetime

class Menu:
    def __init__(self):
        self.posts = self.load_posts()  # Load existing posts from the file on initialization

    # Load posts from the 'blog_data.txt' file, if it exists, and return them as Post objects
    def load_posts(self):
        try:
            with open(os.path.join(os.path.dirname(__file__), "blog_data.txt"), "r") as f:
                # Each line is a JSON object that needs to be converted back into a Post object
                return [Post.from_dict(json.loads(line)) for line in f]
        except FileNotFoundError:
            return []  # Return an empty list if the file doesn't exist yet

    # Save posts to 'blog_data.txt', writing each post as a JSON string
    def save_posts(self):
        with open(os.path.join(os.path.dirname(__file__), "blog_data.txt"), "w") as f:
            # Convert each Post object to a dictionary and then to a JSON string
            for post in self.posts:
                f.write(json.dumps(post.to_dict()) + "\n\n")

    # Create a new post by prompting for the title, content, and author
    def create_post(self):
        title = input("Enter the post title: ")
        content = input("Enter the post content: ")
        author = input("Enter the author's name: ")
        date = datetime.datetime.now()  # Automatically generate the current date/time
        post = Post(title, content, author, date)  # Create a new Post object
        self.posts.append(post)  # Add the post to the list of posts
        self.save_posts()  # Save the updated posts to the file
        print("Post created successfully!")

    # View all posts, showing the title, content, author, and creation date
    def view_posts(self):
        if not self.posts:
            print("No posts available.")  
        else:
            for idx, post in enumerate(self.posts, start=1):
                print(f"Post {idx}: {post}")  # Print each post, using the __str__ method of Post
                print('') # for spacing between the blogs

    # Update an existing post by selecting it by its number and changing the title/content
    def update_post(self):
        self.view_posts()  # Display existing posts first
        post_number = int(input("Enter the post number to update: ")) - 1
        if 0 <= post_number < len(self.posts):
            title = input("Enter the new title: ")
            content = input("Enter the new content: ")
            self.posts[post_number].title = title  # Update the post's title
            self.posts[post_number].content = content  # Update the post's content
            self.save_posts()  # Save the updated posts to the file
            print("Post updated successfully!")
        else:
            print("Invalid post number.")  # If the post number is out of range, show an error

    # Delete a post by selecting it by its number
    def delete_post(self):
        self.view_posts()  # Display existing posts first
        post_number = int(input("Enter the post number to delete: ")) - 1
        if 0 <= post_number < len(self.posts):
            del self.posts[post_number]  # Remove the selected post from the list
            self.save_posts()  # Save the updated posts to the file
            print("Post deleted successfully!")
        else:
            print("Invalid post number.")  # If the post number is out of range, show an error
