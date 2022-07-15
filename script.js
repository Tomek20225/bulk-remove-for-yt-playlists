// Get all video elements from the playlist and transform them to array
let videos = document.getElementsByTagName('ytd-playlist-video-renderer')
videos = Array.prototype.slice.call(videos)

// Skip set amount of videos from the beginning (optional)
const skipVideoAmount = 0
videos = videos.slice(0 - videos.length + skipVideoAmount)

// Filter videos for only authors you want to delete (optional)
const authors = ['CHANNEL_NAME']
videos = videos.filter(video => {
    const author = getAuthorOfVideo(video)
    if (authors.indexOf(author) != -1) return false
    return true
})

// Get remove button from popup
function getDeleteBtnFromPopup() {
    const popup = document.getElementsByTagName('ytd-popup-container')
    const popupBtns = popup[0].getElementsByTagName('ytd-menu-service-item-renderer')
    return popupBtns[2]
}

// Open popup for specific video
function openPopupForVideo(video) {
    const btnOuter = video.getElementsByTagName('ytd-menu-renderer')[0]
    btnOuter.click()
    btnOuter.getElementsByTagName('yt-icon-button')[0].click()
}

// Get author of the video
function getAuthorOfVideo(video) {
    return video.getElementsByClassName('yt-formatted-string')[0].innerText
}

// Wait for set amount of miliseconds synchronously (currently unneeded)
function synchronousWait(ms) {
    const start = Date.now()
    let now = start;

    while (now - start < ms) {
        now = Date.now();
    }
}

// Remove the specified video
function removeVideo(video) {
    video.scrollIntoView()
    const author = getAuthorOfVideo(video)

    if (authors.indexOf(author) != -1) {
        console.log(`Video by ${author} is okay`)
        return
    }

    console.log(`Attempting to remove video by ${author}`)
    openPopupForVideo(video)
    let removeBtn = getDeleteBtnFromPopup()

    if (!removeBtn) {
        console.error(`Process error - remove button wasn't found`)
        console.error(video)
    }
    else {
        removeBtn.click()
        document.body.click()
        console.log('Remove attempt successful')
    }
}

// Remove all videos asynchronously
for (let i = 0; i < videos.length; i++) {
    setTimeout(() => {
        removeVideo(videos[i])
    }, i * 1000)
}
