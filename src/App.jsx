import Card from './Components/Card'

const App = () => {
  const jobs = [
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAABTVBMVEX09PTjPissokw6fOzxtQD//PWcuPE6e+76+fSmvu8ro0v39vTm6vP09Pb28/RMhus0eO7ysgDw9vMAmjLxx2W7z+zgHgDhPy8InDry///z+vrlPC/x7+MWbevt8vT7+/zhOSPnqqTgMRPu4d/vuRvt27L02Z4WoVIhoUQ3feKNwpE4ePPa7OLL5c/v/vX35uj13drz1NX0yMbvo5/mg3jkZVvkYlHsqZvlcmHtycDkjYbnTT/meXLuv7Tok4LstrHhVUDqIxfoWU3v39PrDgDtyaLwwE3ukwLkWCPtoQ3kbxzqfxvzujTvzHzy6dDmUCnv0IvrmnhxmOrT3Pfy6cRcj+q1qQ2nw4afqy5DokBFrGSHqDCdzKkaaPVsp0Fds3OBpuqx2b7SrxXb0ppAj790wIkxjbExloA2gdQjl3MwhsQjnGVDmZ80jqK708yYtbn8AAAKF0lEQVR4nO2d/VfayBrHQ0BFhhnJpOUlIIlBbYogoNCq2Grprrvdre29be1tKbeU3dLdu967//+PdyaKRcgkEFAnkM/Z03OW6jnMt9/nZZ4ZgiD4+Pj4+Pj4+Pj4+PhcAiGCCAkQCRhjhUJfw5AgCAjRP+cJIODwdkpJpVKoVC5XKpUcIqqQ/8UYAPLfXb+/20VJqQra2a3W6nr8Cj3xqLq7k1MVZV7MQZdJ1opyj/eoDrqmBSgJSjoQ0OiL2t5uBZk/JqC7fr83DVlkZv+gTpUIsNDi8cThkzKm2s20IBCW9p8m7KQwIT7R49rhkxyCGN/1e74xFFQ+2nv2jGiRTtvrYf6AHq+RqFFm0yNQwTu7x3EHX1xHj9dNQdDMFRoFVR7XxxODoun1g32gzpYcSFDKjxvji3EhyPFuWYGzJIiC1vY0V2KYgmi1tYw6MykVKpVqQHcrBkXXDsupu17GdICKsHbs3ho9gxwfkU2N9x2ClczhpGKYggSqSEGeL7jKzvFEcXJFWqtVtr2sB3nvKLWmT0cNqsfxvuLprR1SDuJTEoOi6zSBeBTia1SNO3Xj45AmenjXHgo6fDZFMQj6XsWjciCklA6nUFH60fbKXg0WCHPVaSVR76shKKXqdL2RJpGiAI8WWgUdTKP56kP3sDcEtJuerhpxL6shHCVGU8McF1+i9V6x+DH9EVHDo1VFQOXGSGmUDs61xmG1+vTp0+reI43O1q298ai0fdeLcg3M7Y2ihh6vVx9XyrlSqYQQKuVyucrRQSNuMSV6Vnvu2UgBSHns0Jpr6YAW157u58zTR6yYG3fzOFLIVHYTAxZJxxtlz07D0La6H08nbOVI6D/Ud4gSVmuECn5S6xckoTdyHh50oHDdIVS0eGM/BXHYYrtOT9+Qgvdr30NGbzxXPNpuUMgu1nbfltbqRykVYebsgvyNqjypm32LZvYbXo0UAnpunzi0QLWkOpdMJXcY0GkZrlU8PSXFNdtQ0WpHcJRMAJTUWl0jP15OeXcEhgXlyMYciYB2WFYwKSaOK4QApfYbem3f05ECsw12O0r69oPc6A0EUMrVimf7DRPlR7vmPL2LxigSgBaZG3yvt0Dm5KefWXVF03eFcZaHzNsxXt2oUOCmFHrxC+O6gr6Lvby28YHhe1IoJP1quS2NV8m/tGeLhAsg3HgZIkg/vR7UIxHQH6H58gaC+DR0wYufBwNG08rzpQZxx6sTqafHYAKJH6lgzvSAm+uhK64nkHh1zkKFgE+l73KE+hOIlpi7UOmPFZJOJZpArmrs2l2/udsHboT6kULSL5cBo9XG6M1nBAj+IYUGuAgYTVubu1AhsXJvSI7Qi9c0VObQHAi+Wx9Sg1ZcLU32KvPHQOq4SiG/vm7szJ05yH58OHVcJpB/lpxSBwgvuCR8K2sbH5g5ZcgR2nT6tA7ILi+6JMrpphBmThhyvHznaI7oSizohqXV+5zODuGrkLUc0r2M0+8SOZZcEVxdXLiNxY0PfMeS4xQ6GZq6Y8mVPbbe8CrHBiNW1jcdL+24DpZg7IxTOdCPDHO83BjJHe7kCAb5LC2Qjkkt5Th55dihu5djKRblMpdCwKiz0knmJuVY5VSOjMWO5aKwOJ8NzJUczrvZCXLH6lsuk8edyXHfW3KE7qmOvzyhHBz26TZy3Lg7vCSHHyy3LIfzZZHb544KLZUjzOEgljnuuNk2zHQHh3IImNGkh0iTfoN7FtJ3cCkHsJZDCpEtnOPvTiAHn12pIDA2+NKNbvD5leOddaxIoVPHXOp+OBjkdEcrwFfrDD3uOebSCcY/MS7bjoED62uMNjp2GIoy2DrjVQ72wcLvTrcn3buD11kpwIg1Dnv/L8db19llJ4LWBoktcuoOwDiUDH342Cw6ttFhELZjQWW4h9tzFlJa1oftIa1/ijwwWo6PusK2H2cCC/cZ2ePfWQ43LCZWuxbp/WcxIhrtwoSN48IXlju4bEkpw9ddJOnDxwdEDjHSmfSi3Ip17oid8XtJe/DgSQp9+miKQe0xgaehEL7PKizLvMYK4fpVOWn9s9gj2ZnkkZtw4Qsjday+5VgOob/zkN6TQOkRaU6QPQCKrrD6sCjHD3q9umYr0bQR+a4GsUceuR5pwoVFay2WYm+i29zaA8F3vWih9VXsJ5J0n03B2zNLcywFV5fRNr+pFGZ7V/R/+/xAvC6HEXGdTTGrygZjb/kNFWqPjZemPUjauG4OGi7djONUzAoQvs/a0Gy9iXJ97Z9+vIdUlA/GoBYUOS+4yR8g+oahxtLq8g2sYZoom+vSb5+GnHEZL3kXLSSIskMlyHWsUDIn72nasBQkYrTG1QOGs4sx1rSDxsrNrGJqwN8/RqzFoHqILex8YNsPEJbZk5AYzy2pCQS4GWGpIZK/yWfGWQIAy0G2GmfcxwrJlcUkUw4qSLcwqj8gBmCRMfUx5Vj0wofzQTvJloMI0u6MuAqEomdMLYgaK2/D/MuBiD0s62wvfZCAGemMGamdr6s25lhaBF5whwC7ssjOHwSj2UGY/aReCACCUC10jeS3LeYMnWxXPGAO+ozSbdE2XOgGpllQbXb8ECCcNwwxIv+xxbyNzOvMeACaTQ07c1CScrt4+dU0A5DXULjYTcqmwYzzP7eszXEW9YYcZOeC8nbVxSy4RBAxX8Q4SxSBNDgEaGYCJOBCqyknzU4uEokY51+Dln3Y8gLPu5VrwIx9demFTFLstgqFQhZnLygUip18Myn3p2LjwbeHwaGMGvvC52mTNajQtKku3wUxksQHzW7epNtuGrI85CuSQP4clGNphfv2vB8EO8xO3colFxhmuhgqSobxn79i/b3pUjDG72GTJVBoja6Ho17G+bf+Xj22teiJGtsHJJVyinoY/334vcLEzsLuB693BCJt1LTkMAOmV3FXYivRMOT3tMkSgNWp6iHK51+3Yhdp1At7lSEwnKIeJL8a5/97GKM7N4+l0R6k056qPwzxj4ekZ/eoGgJQiB7yFPUgFeYvUmI9++xSjFBenlp9ISTP/4Ycn0I6gtROMsKYJI+PIXbGG7XyByyKhu30Y2QiyXbR29+IRr+TRM10I9PIqIaYn+SSCDdA3BIn71CNZkudjWf0IVTsihMaJNL+WxU8HSl9qJlWewKDGMQaWPV0TekHCFAt5pv2IzK2GMlmvgiQV7+LxBqULXabdkcODCJUDB4/7TYRgPRkuJgXLwZ/I9okQsSgE1XVEwcq44FJWcgWOu2kGTMjCWLIzVYBz+5DX7EqFKhFRujcjaQsdzsFPMvfeQ4AQpBYJN+U5aFWte8FQ5ab+U42K8yyGJfQMxVcbLVl+WJu3q8Lna3LstFuMQ6lZhRiEoQyxVa3Lcp9GM12t1UskNSJ5upprxAiARBFkKqqhUKhSClkgEqFuDTFzBXXkaCnkVSXCz/MkyV8fHx8fHx8fHx8fJz4PwXNTGNkxcjjAAAAAElFTkSuQmCC",
    company: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45 - $65 / hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAArlBMVEX///+BuwAApe//ugDyTxx4eHh0dHRwcHD/uAB9uQBsbGyfn5/09PS+4Pb9+Or1gmnySQ/+8O30dlr6xbrX6Lufx1X3+OrxOgDO4LH76b4AoO5RtfH/57ujzGXyRQB1tgDp9f39xlU2re39wS6Wlpbl5eXMzMzCwcDV1dWJiYmzs7OBgH6np6dkZGT3moj1fWH808rh7cy41Yb0a1DxLACbxUr77cn9vxr8zGBZWVm6lG/KAAAEm0lEQVR4nO2XDbfcJBCG8QNQwq2ttdVWrdUuJCTEtlqt/f9/zHmBJGyS2+727nHVM+859+4uw8cDzAwgBIvFYrFYLBaLxWKxWCwWi8VisVi36sGvL7/a6uUr8frRjzv67fF1KL9+dn+rZw/FN1/u6dG1KO9/vlWi/GQrpmRKpmRKpmRKpmRKpmRKpmTKI8rf33y71Rui/GlPf1yH0r56uKcH4vF3e3p9Fcj/im529Vzce7KnP68D+fz7p3u6ET98saef712J8tMdJcrPtmJKpmRKpmRKpmRKpmRKpmRKpjymfHob5b/q3fPLnm7Ek7cvtnr713UoWSwWi/UPy/qDVNKf18h10C1FfdPbi+Fl2WiUkqY9r1WjlVLG1f0cqEgHwuuNMvGijEJELeVHUCoppW6qkg4l6kCUoXxeUM5Q563ztFXOn46aKKWuSjDbTNeOeuwvCilaI3Xq0sag5ZmUapmWNXKiFD6e6eUfFJYgubwLSg3nUh7mApqtuvxOT6oo5ZmU+JvDnFo3YY/SOXdUNv+wKwNq1vXqnzOlPZdSOS31FMueAtCVtaTvsrhCF8bRjKOKKQBUT/E/GgznDmQgy2Ei8UOqGUq7aLIZdTszYOPSv0mNOEWgFAf8K5NVBKgKJbl6orRRJ8eQiqq5kQKgh/d2wvZa59G0ynFG2QupRpr8SxWzwjJ049SLmr7okym1aLU0OU5oGbUXC2UOq5CS3DBIhCVRyjBgoI6ybTZgVANMD6pA5kTZT+3ITKHdGbmWOoPSUT+hLIUMzq4oI3rHKWTbkCkp23vfOz8Wg4Nra0cnQnHxDh7UATKZE25HHgp7S47qPCXjwR178AcoUwyl+lqS660oaQ7TUguXKYsbByXLRieniSkmwhxKZNbF3BTX//jo0Tki0Ak80a0pyR9q90k7nqbUIRSmUgM+C7ApXdhxQXbYXXuXTKTTtBVGphWhpitK6rk+6IlS5aVs1ZIbBIhdojAxc3ZmqiiSK4x3psTJ5bG3uAccU2IAVSVEUOZ9RNDNhxZ239GawUHzWrdm9gfkjjTVu1GiUUBMDnZDSePLXcq+pjxk18bJR5uL8x+eclnKvK1BpW63lPq2tVwwqNaAFaRbLlLm2B2tpW0useMpEoLMXaz8kqqY6p5cUarqAqCrUAnJgIqTGVO9e/SktSCl43sb43WHC2UK3BJXbRUqwmLKQhg53w98yRM1pTzr5pYpPfrMbrbOl4CJaZ1srClTkswHOHKqxolpK8qI7OSm+WgvjvIl7dDJ966ZEj3LUexQYp3oyI1tS2+NI0pLx3sxIAFRwUCHUudDfjO4AeambdPJlFZ6pkzRNrT9aS+WmRIRW5L3mjJf37XBu+qIkrwZAW0QLqYR+UQx+KnTgdsNOBkNriomXwUXyrx35rRz/DCad2VEbcbcgaWrFyLBvzNjzjQeQ9ENBhcyR6VzZLswJoMpviLzz+kit5jLY5SGmyKxgcks1+/3yS3vXDd/o7KUVMpn4oxNE9t1KVq1ZOnnl4frYxOr97GFeXmYYLjJ6NDwtNsGi8VisVgsFovFYrFYLBaLxWKx/mf6G1C+wwJtjdvWAAAAAElFTkSuQmCC",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40 - $60 / hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "data:image/jpeg;base64,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",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer I",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$35 - $55 / hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_-CwxoQcTdL_h0fGDNwtqfo9y18Fu7cE-p9pvCJ23w&s",
    company: "Apple",
    datePosted: "10 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45 - $70 / hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDZfQFgkOx0fkvr7xATdrEQfiBSLGMSkLX4C6few5AA&s=10",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "QA/Test Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$50 - $75 / hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsoKyHWXyJiRi4X_xVvdhCAy8PLNzBL3nJ0Vv6z34Iw&s=10",
    company: "Netflix",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60 - $90 / hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4cvli6tFMgdWcZvqveTrFNk96w_cYzntM68jcWoYfA&s=10",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45 - $65 / hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWKdk5cTtuLujmn8mLPi8Jb-ZHWkCtz7kobkR5KNXpQ&s=10",
    company: "Adobe",
    datePosted: "3 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$35 - $55 / hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHJhzQTyoy3ldT-hNFp6xNZ_Oo2e-88GVo5bkgnRfCg&s=10",
    company: "Salesforce",
    datePosted: "8 days ago",
    post: "Associate Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38 - $58 / hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYVxgz7AP2ev_Qj7Sw44OMt4KYTRdHqDZ4EoelbYc6Q&s=10",
    company: "Oracle",
    datePosted: "10 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45 - $70 / hr",
    location: "Mumbai, India"
  }
];
console.log(jobs)
  return (
    <div className="parent">
      
      {jobs.map(function(elem){
        return <Card brandLogo={elem.brandLogo} company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
      })}

    </div>
  )
}

export default App
