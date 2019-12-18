import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h2>A propos d'Easygame</h2>
                <article> 
                    Imaginez vous animateur, surveillant un groupe de 50 enfants. Vous êtes en manque d'un outil 
                    vous permettant de vous organiser. De surcroît ces 50 gamins, vous devez les surveillez au cours d'une 
                    excursion, que vous avez prévu de faire en forêt. Comment allez vous vous y prendre?
                    Easygame est une solution qui essaye de répondre à ce besoin d'organisation des activités
                    et d'administration des animés pour des organisations prévoyant des activités ludiques 
                    dans le secteur de l'éducation. Cela répond aux besoins des animateurs qui se retrouvent 
                    des fois surménés et qui doivent absolument surveiller à distance des enfants. 
                    Les enfants vont aussi profiter de leur moment et béneficier d'une certaine indépendance . 
                    Les parents seront rassurés de savoir que leurs enfants sont entre de bonnes mains.
                    <br></br>
                    <br/>
                    Notre projet possède deux applications à savoir: une application et une application mobile. 
                    Dans l'application web il sera possible de se connecter, de créer un compte en tant qu'animateur, d'organiser 
                    ses journées dans un agenda. Et dans l'application mobile on pourra également créer un compte 
                    en tant qu'animateur, de se connecter, d'avoir accès à son agenda et
                    pourvoir géolocaliser les groupes d'enfants et 
                    ceci grâce à un traqueur GPS qui sera connecté à notre application mobile.
                </article>
                <span>Plus d'informations sur </span>
                <a href="https://github.com/darrylbilongo/ProjetDIntegration2019/wiki">https://github.com/darrylbilongo/ProjetDIntegration2019/wiki</a>

            </div>
        )
    }
}
