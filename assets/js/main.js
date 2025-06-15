/* 
    Code by kitbur @ GitHub
*/

document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons()

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
    })
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
    })
        
    // Character Data
    const characters = [
        {
            id: 1,
            name: 'Gigi',
            title: 'The Maestro',
            img: 'assets/img/gigi.jpg?text=Gigi',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae architecto quam at magni blanditiis aliquid ad sunt nihil rerum repudiandae?'
        },
        {
            id: 2,
            name: 'Winnie',
            title: 'Destroyer of Plants',
            img: 'assets/img/winnie.jpg?text=Winnie',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum sunt fugiat aliquid totam?'
        },
        {
            id: 3,
            name: 'Pibbles',
            title: 'The Unseeing',
            img: 'assets/img/pibbles.jpg?text=Pibbles',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit fugiat laboriosam impedit quas optio. Rem, optio.'
        },
        {
            id: 4,
            name: 'Timmy',
            title: 'Hunter of Rodents',
            img: 'assets/img/timmy.jpg?text=Timmy',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint molestiae ad alias.'
        },
        {
            id: 5,
            name: 'Momo',
            title: 'Void Watcher',
            img: 'assets/img/momo.jpg?text=Momo',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore ullam quaerat eaque!'
        },
        {
            id: 6,
            name: 'Kim',
            title: 'Of the Sharpest Fangs',
            img: 'assets/img/kim.jpg?text=Kim',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut praesentium beatae totam quaerat a optio expedita deleniti in?'
        }
    ]

    const characterBg = document.getElementById('characters-section-bg')
    const displayContainer = document.getElementById('character-display')
    const navContainer = document.getElementById('character-nav-sidebar')

    function selectCharacter(characterId) {
        const char = characters.find(c => c.id === characterId)
        if (!char) return

        const currentHeight = displayContainer.offsetHeight;
        displayContainer.style.minHeight = `${currentHeight}px`
    
        // Update Character Display
        characterBg.style.backgroundImage = `url('${char.img}')`
        displayContainer.innerHTML = `
            <div class="animate-fade-in w-full flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
                <div class="w-full md:w-1/2 flex-shrink-0 character-image-container mx-auto">
                     <img src="${char.img}" alt="${char.name}" class="rounded-xl shadow-2xl" >
                </div>
                <div class="w-full md:w-1/2 text-center md:text-left">
                    <h3 class="text-5xl md:text-6xl font-quicksand font-bold text-gray-800 mb-2">${char.name}</h3>
                    <p class="text-xl text-gray-500 mb-4 font-semibold">${char.title}</p>
                    <p class="text-gray-600 text-lg leading-relaxed">${char.desc}</p>
                </div>
            </div>
        `
        // Update Active Portrait
        document.querySelectorAll('.character-nav-item').forEach(p => {
            p.classList.toggle('active', parseInt(p.dataset.id) === characterId)
        })
    }

    function populateCharacterNav() {
        navContainer.innerHTML = ''
        characters.forEach(char => {
            const navItem = document.createElement('div')
            navItem.className = 'character-nav-item'
            navItem.dataset.id = char.id
            navItem.title = char.name
            navItem.innerHTML = `
                <img src="${char.img}" alt="${char.name}">
                <span class="font-semibold text-gray-700">${char.name}</span>
            `
            navItem.addEventListener('click', () => selectCharacter(char.id))
            navContainer.appendChild(navItem)
        })
    }

    const styleSheet = document.createElement("style")
    styleSheet.innerText = `
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
    `
    document.head.appendChild(styleSheet)
        
    populateCharacterNav()
    if (characters.length > 0) {
        selectCharacter(characters[0].id)
    }
        
    // Pre-Register
    const preregisterForm = document.getElementById('preregister-form')
    const formMessage = document.getElementById('form-message')
    preregisterForm.addEventListener('submit', function(e) {
        e.preventDefault()
        formMessage.textContent = 'Success! See you soon.'
        formMessage.className = 'text-green-600 font-semibold mt-4'
        preregisterForm.reset()
        setTimeout(() => { formMessage.textContent = '' }, 5000)
    })
})