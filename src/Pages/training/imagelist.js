import TrainingImage_Intro from "../../assets/image/trainingIntro.png";
import TrainingImage_Intro_2x from "../../assets/image/trainingIntro@2x.png";
import TrainingImage_DesignMethod from "../../assets/image/designmethod.png";
import TrainingImage_DesignMethod_2x from "../../assets/image/designmethod@2x.png";
import TrainingImage_DesignMethodStraight from "../../assets/image/designmethodstraight.png";
import TrainingImage_DesignMethodStraight_2x from "../../assets/image/designmethodstraight@2x.png";
import TrainingImage_ResearchFlow from "../../assets/image/researchflow.jpg";
import TrainingImage_ResearchFlow_2x from "../../assets/image/researchflow@2x.jpg";
import TrainingImage_Observation from "../../assets/image/observation.png";
import TrainingImage_Observation_2x from "../../assets/image/observation@2x.png";
import TrainingImage_FunctionFlow from "../../assets/image/functionflow.png";
import TrainingImage_FunctionFlow_2x from "../../assets/image/functionflow@2x.png";
import TrainingImage_FunctionFlowStraight from "../../assets/image/functionflowstraight.png";
import TrainingImage_FunctionFlowStraight_2x from "../../assets/image/functionflowstraight@2x.png";
import TrainingImage_Wireframe1 from "../../assets/image/wireframe1.jpg";
import TrainingImage_Wireframe1_2x from "../../assets/image/wireframe1@2x.png";
import TrainingImage_Wireframe2 from "../../assets/image/wireframe2.jpg";
import TrainingImage_Wireframe2_2x from "../../assets/image/wireframe2@2x.png";
import TrainingImage_Mockup from "../../assets/image/mockup.png";
import TrainingImage_Mockup_2x from "../../assets/image/mockup@2x.png";
import TrainingImage_MockupStraight from "../../assets/image/mockupstraight.png";
import TrainingImage_MockupStraight_2x from "../../assets/image/mockupstraight@2x.png";

const TrainingImages = [
    {
        key:"introduce",
        src:TrainingImage_Intro,
        srcSet:`${TrainingImage_Intro} 1x,${TrainingImage_Intro_2x} 2x`,
        alt:"IntroImage",
    },
    {
        key:"method",
        src:TrainingImage_DesignMethod,
        srcSet:`${TrainingImage_DesignMethod} 1x,${TrainingImage_DesignMethod_2x} 2x`,
        srcSetStraight:`${TrainingImage_DesignMethodStraight} 1x,${TrainingImage_DesignMethodStraight_2x} 2x`,
        alt:"DesignMethod",
    },
    {
        key:"researchflow",
        src:TrainingImage_ResearchFlow,
        srcSet:`${TrainingImage_ResearchFlow} 1x,${TrainingImage_ResearchFlow_2x} 2x`,
        alt:"ResearchFlow",
    },{
        key:"observation",
        src:TrainingImage_Observation,
        srcSet:`${TrainingImage_Observation} 1x,${TrainingImage_Observation_2x} 2x`,
        alt:"Observation",
    },{
        key:"functionflow",
        src:TrainingImage_FunctionFlow,
        srcSet:`${TrainingImage_FunctionFlow} 1x,${TrainingImage_FunctionFlow_2x} 2x`,
        srcSetStraight:`${TrainingImage_FunctionFlowStraight} 1x,${TrainingImage_FunctionFlowStraight_2x} 2x`,
        alt:"FunctionFlow",
    },{
        key:"wireframe1",
        src:TrainingImage_Wireframe1,
        srcSet:`${TrainingImage_Wireframe1} 1x,${TrainingImage_Wireframe1_2x} 2x`,
        alt:"Wireframe1",
    },{
        key:"wireframe2",
        src:TrainingImage_Wireframe2,
        srcSet:`${TrainingImage_Wireframe2} 1x,${TrainingImage_Wireframe2_2x} 2x`,
        alt:"Wireframe2",
    },{
        key:"mockup",
        src:TrainingImage_Mockup,
        srcSet:`${TrainingImage_Mockup} 1x,${TrainingImage_Mockup_2x} 2x`,
        srcSetStraight:`${TrainingImage_MockupStraight} 1x,${TrainingImage_MockupStraight_2x} 2x`,
        alt:"Mockup",
    },
]
export default TrainingImages