export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Hi, I'm Poom 👋</h1>
        <p className="text-lg mb-4">
          I’m a software developer focusing on AI, computer vision, and
          full-stack web development.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card bg-base-200 shadow">
              <div className="card-body">
                <h3 className="card-title">Marine AI Classifier</h3>
                <p>YOLOv8-powered fish species classification pipeline.</p>
                <div className="card-actions justify-end">
                  <a
                    className="btn btn-primary"
                    href="https://github.com/yourusername/project"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* Add more project cards here */}
          </div>
        </div>
      </div>
    </main>
  );
}
