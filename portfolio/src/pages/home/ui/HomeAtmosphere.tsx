export function HomeAtmosphere() {
  return (
    <div className="app-atmosphere" aria-hidden="true">
      <span className="app-atmosphere__orb app-atmosphere__orb--north" />
      <span className="app-atmosphere__orb app-atmosphere__orb--south" />
      <span className="app-atmosphere__orb app-atmosphere__orb--edge" />
      <span className="app-atmosphere__beam" />
      <span className="app-atmosphere__grid" />
    </div>
  )
}
