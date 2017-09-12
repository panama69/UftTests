Browser("Browser").Page("Page").Sync
Browser("Browser").Navigate "http://dockerserver:8000/#/"
Browser("Browser").Page("Advantage Shopping").WebElement("TABLETS").WaitProperty "innertext", "TABLETS", 10000
Browser("Browser").Page("Advantage Shopping").WebElement("TABLETS").Click
