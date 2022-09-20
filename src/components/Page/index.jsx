import Head from 'next/head';
import { getComponent } from '../index';

const Page = (props) => {
    if (!props.page) {
        return null;
    }

    const { page: { _id, fields } } = props;
    const Footer = getComponent('Footer')
    return (
        <>
            <Head>
                <title>{fields.title}</title>
            </Head>
            <main data-sb-object-id={_id}>
                {fields.sections?.map((section, index) => {
                    const Component = getComponent(section._type);

                    return (<Component path={`sections.${index}`} key={`${section.type}-${index}`} {...section} />);
                })}
            </main>
            <Footer/>
        </>
    );
}

export default Page;
