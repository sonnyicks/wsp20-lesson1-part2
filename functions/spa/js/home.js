function home(){
    pageContent.innerHTML = `
        <div class="jumbotron">
            <h1 class="display-4">Welcome to Future Company, Inc </h1>
            <p class="lead">We are the leading company in the production of TBA, with production locations located in the great state of TBD.</p>
            <hr class="my-4">
            <p>Click below to find out more details about our company that have yet to be written!</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>   <span class="badge badge-dark">Under Construction</span>
        </div>
        
        <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Mission Statment
            </a>
            <span class="badge badge-success">New</span>

        </p>
        <div class="collapse" id="collapseExample">
        <div class="card card-body">
            To develope a mission statement that employs three objectives, uses the word synergy, and mentions the global community.
        </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item">CEO - Kevin Smith  (405) 777-7777</li>
            <li class="list-group-item">VP - Ronald Smith  (405) 777-7777</li>
            <li class="list-group-item">CEO - Kathy Smith  (405) 777-7777</li>
            <li class="list-group-item list-group-item-warning">Emergencies  -  (405) 777-7777</li>
        </ul>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Invest</a>
            </li>
        </ul>
        `
    ;
}