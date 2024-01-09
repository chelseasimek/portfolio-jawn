const Frame = {
    create: () => {
        document.getElementById("copyright").innerHTML = `Chelsea Simek &#8212 © ${new Date().getFullYear()}`;
        updateTime();
        document.getElementById("scrollButton").addEventListener("click", scrollButton);
        
        
        function updateTime() {
          const currentLocale = new Date().toLocaleString('en-US', {hour12: true, timeZone: 'America/New_York' });
          document.getElementById("time").innerHTML = `PHL &#8212 ${currentLocale.split(', ')[1]}`;
          setTimeout(updateTime, 100);
        }

        function scrollButton() {
            if (isElementVisible(document.getElementById('intro'))) {
              document.getElementById('about').scrollIntoView({ behavior: "smooth"});
            }
            if (isElementVisible(document.getElementById('about'))) {
              document.getElementById('job').scrollIntoView({ behavior: "smooth"});
            }
            if (isElementVisible(document.getElementById('job'))) {
              const recipient = "chelsea.z.simek@gmail.com";
              const subject = "Let's Connect!";
          
              const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
          
              window.location.href = mailtoLink;
            }
          }
          
          function isElementVisible(el) {
            var rect     = el.getBoundingClientRect(),
                vWidth   = window.innerWidth || document.documentElement.clientWidth,
                vHeight  = window.innerHeight || document.documentElement.clientHeight,
                efp      = function (x, y) { return document.elementFromPoint(x, y) };     
          
            // Return false if it's not in the viewport
            if (rect.right < 0 || rect.bottom < 0 
                    || rect.left > vWidth || rect.top > vHeight)
                return false;
          
            // Return true if any of its four corners are visible
            return (
                  el.contains(efp(rect.left,  rect.top))
              ||  el.contains(efp(rect.right, rect.top))
              ||  el.contains(efp(rect.right, rect.bottom))
              ||  el.contains(efp(rect.left,  rect.bottom))
            );
          }
    }
}

export { Frame }