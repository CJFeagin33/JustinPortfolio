import MovieFinder from '../../assets/MovieFinderScreenshot.png'
import CalendarPlanner from '../../assets/Calendar-Planner.png'
import PasswordGenerator from '../../assets/PasswordGenerator.png'
import WorkDayScheduler from '../../assets/WorkDayScheduler.png'
import TournamentMaker from '../../assets/TournamentMaker.png'
import './index.css'

function ProjectsModal() {
    return (
       <div className='EntireProjectsPage'>
            <div className='Projects'>
                <h1>Projects</h1>
                <p>
                    Here are some Projects I have worked on over the course of the past few months.
                    <br />
                    I will be updating this section of my Portfolio regularly as I complete new projects over time!
                </p>
                <div className='completedProjects'>
                    <h2>Movie Finder: Find Movies on any Streaming Platform!</h2>
                    <a href="https://matthkang.github.io/Movie-Finder/">
                        <img src={MovieFinder} alt="MovieFinder" />
                    </a>
                    <h2>Calendar Planner: Plan well into the future!</h2>
                    <a href="https://protected-taiga-58244-3710fb729053.herokuapp.com/">
                        <img src={CalendarPlanner} alt="CalendarPlanner" />
                    </a>
                    <h2>Password Generator: Creating Random Passwords is Easy!</h2>
                    <a href="https://cjfeagin33.github.io/Random-Password-Generator/">
                        <img src={PasswordGenerator} alt="Password Generator" />
                    </a>
                    <h2>Work Day Scheduler: Plan Each Hour With Ease!</h2>
                    <a href="https://cjfeagin33.github.io/Calendar-Application/">
                        <img src={WorkDayScheduler} alt="WorkDayScheduler" />
                    </a>
                    <h2>Tournament Maker (Work In Progress):
                        <br />
                        Create Tournaments for your favorite video games!
                    </h2>
                    <a href="https://game-tourney-hub-8015c3047dd6.herokuapp.com/">
                        <img src={TournamentMaker} alt="TournamentMaker" />
                    </a>
                </div>
                <p>More projects coming soon!</p>
            </div>
       </div>
    );
}

export default ProjectsModal;