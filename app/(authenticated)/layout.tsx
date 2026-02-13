import Sidebar from '../components/Sidebar'

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger" aria-label="Toggle navigation">
        &#9776;
      </label>
      <label htmlFor="menu-toggle" className="overlay"></label>

      <div className="site-wrapper">
        <Sidebar />
        <main className="main-content">
          <div className="content-wrapper">
            {children}
          </div>
        </main>
      </div>
    </body>
  )
}
