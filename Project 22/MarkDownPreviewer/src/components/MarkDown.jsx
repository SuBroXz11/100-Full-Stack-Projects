import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDown = () => {
    const [markdown, setMarkdown] = useState('# Markdown Preview \n\n## Subheading\n\n ![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT904XZ8kpOic417aETQDdVWE2u5LpQ6XJhNQ&s) \n\n---');

    return (
        <main className="h-screen bg-base-200 p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-white animate-pulse">Markdown Previewer</h1>
            <section className="flex h-full">
                {/* Text Area Section */}
                <div className="w-1/2 p-4 h-full">
                    <textarea
                        className="textarea textarea-bordered w-full h-full p-4 resize-none text-white"
                        value={markdown}
                        onChange={(e) => setMarkdown(e.target.value)}
                    ></textarea>
                </div>
                {/* Preview Section */}
                <div className="w-1/2 p-4 bg-white rounded-lg shadow-lg h-full overflow-auto mt-4">
                    <article className="prose lg:prose-xl max-w-none">
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default MarkDown;
