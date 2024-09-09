import datetime

class Post:
    # The constructor method initializes the object with title, content, author, and date
    def __init__(self, title, content, author, date):
        self.title = title  
        self.content = content  
        self.author = author  
        self.date = date 

    # The __str__ method defines how the object is represented as a string (useful for printing)
    def __str__(self):
        # Returns a formatted string with the title, content, author, and date of creation
        return f"{self.title}\n{self.content}\nAuthor: {self.author}\nCreated at: {self.date.strftime('%Y-%m-%d %H:%M:%S')}"

    # Converts the Post object into a dictionary for easy storage (e.g., saving to a file)
    def to_dict(self):
        return {
            "title": self.title,  
            "content": self.content,  
            "author": self.author,  
            "date": self.date.strftime('%Y-%m-%d %H:%M:%S')  
        }

    # Static method to create a Post object from a dictionary
    @staticmethod
    def from_dict(data):
        # Extracts the values from the dictionary and converts the date back to a datetime object
        post = Post(data['title'], data['content'], data['author'], datetime.datetime.strptime(data['date'], '%Y-%m-%d %H:%M:%S'))
        return post
