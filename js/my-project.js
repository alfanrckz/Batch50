let projects = [];



function addProject(event){
    event.preventDefault()

    let getImage = document.getElementById('upload')
    let getProjectName = document.getElementById('project').value
    let getDesc = document.getElementById('description').value
    let getStartDate = document.getElementById('start-input').value
    let getEndDate = document.getElementById('end-input').value
    let getIcon1 = document.getElementById('node')
    let getIcon2 = document.getElementById('react')
    let getIcon3 = document.getElementById('next')
    let getIcon4 = document.getElementById('type')
    
    let printIcon = "";

    if(getIcon1.checked == true){
        printIcon += '<img value="node" id="node" src="/images/next.png" alt="">'
    }

    if(getIcon2.checked == true){
        printIcon += '<img value="react" id="react" src="/images/node.png" alt="">'
    }

    if(getIcon3.checked == true){
        printIcon += '<img value="next" id="next" src="/images/react.png" alt="">'
    }

    if(getIcon4.checked == true){
        printIcon += '<img value="type" id="type" src="/images/typescript.png" alt="">'
    }
    
    getImage = URL.createObjectURL(getImage.files[0])
    getEndDate = new Date(getEndDate)
    getStartDate = new Date(getStartDate)

    let projectDetail = {
        getImage,
        getProjectName,
        getDesc,
        getStartDate,
        getEndDate,
        printIcon
    }

    projects.push(projectDetail)

    renderProject()

    console.log(projects);

}



function renderProject(){
    

    let projectContainer = document.getElementById('project-list')

    projectContainer.innerHTML = firstProjectDisplay()

    let lengthProject = projects.length

    for(i = 0 ; i < lengthProject ; i++){
        console.log(projects);
        projectContainer.innerHTML += `
        <div class="project-list-item">
        <a href="my-project-detail.html">
            <div class="card-img">
                <img src="${projects[i].getImage}" alt="">
            </div>                    
            <div class="card-title">
                <h3>${projects[i].getProjectName}</h3>
            </div>    
            <div class="card-drt">
                <p>${monthDuration(projects[i].getEndDate, projects[i].getStartDate)}</p>
            </div>
            <div class="card-desc">
                <p>${projects[i].getDesc}</p>
            </div>
            <div class="card-icon">
                ${projects[i].printIcon}        
            </div>
        </a>
        <div class="card-btn">
            <div class="edit-btn">
                <button>edit</button>
            </div>
            <div class="del-btn">
                <button>delete</button>
            </div>
        </div>
    </div>
        `
    };
    
};



function monthDuration(endDate, startDate){
    let month
    let year
    let endMonth = endDate.getMonth()
    let startMonth = startDate.getMonth()
    let endYear = endDate.getFullYear()
    let startYear = startDate.getFullYear()

    if(startYear == endYear){
        if(startMonth == endMonth){
            month = 1
            return 'durasi ' + month + ' bulan'
        }else{
            month = endMonth - startMonth
            return 'durasi ' + month + ' bulan'
        }
    } 
  
    
    if(endYear > startYear){
        if(endYear - startYear == 1){
            if(startMonth == endMonth){
                return 'durasi 1 tahun'
            }else if(startMonth > endMonth){
                month = (startMonth - endMonth - 12) * -1
                return 'durasi ' + month + ' bulan'
            }else if(startMonth < endMonth){
                month = endMonth - startMonth
                return 'durasi 1 tahun ' + month + ' bulan'
            }
        }else{
            year = endYear - startYear
            if(startMonth == endMonth){
                return 'durasi ' + year + ' tahun '
            }else if(startMonth > endMonth){
                year -= 1
                month = (startMonth - endMonth - 12) * -1
                return 'durasi ' + year + ' tahun ' + month + ' bulan'
            }else if(startMonth < endMonth){
                month = endMonth - startMonth
                return 'durasi ' + year + ' tahun ' + month + ' bulan'
            }
        }
    }

}


function firstProjectDisplay(){
    return `
    <div class="project-list-item">
    <a href="my-project-detail.html">
        <div class="card-img">
            <img src="/images/OIP.jpg" alt="" />
        </div>                    
        <div class="card-title">
            <h3>Web Developer</h3>
        </div>    
        <div class="card-drt">
            <p>2023</p>
        </div>
        <div class="card-desc">
            <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat corporis magni 
            suscipit libero exercitationem! Aperiam 
            excepturi natus ad nihil cum!</p>
        </div>
        <div class="card-icon">
            <img id="next" src="/images/next.png" alt="" />
            <img id="node" src="/images/node.png" alt="" />
            <img id="react" src="/images/react.png" alt="" />
            <img id="type" src="/images/typescript.png" alt="" />
        </div>
    </a>
    <div class="card-btn">
        <div class="edit-btn">
            <button>edit</button>
        </div>
        <div class="del-btn">
            <button>delete</button>
        </div>
    </div>
</div>
    `
}